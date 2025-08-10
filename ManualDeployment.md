# 0) Prereqs (common)

* Make sure your MongoDB Atlas IP is whitelisted for your current machine (or use a VPN with a fixed IP).
* Decide your local ports:

  * Redis: `6379`
  * Zookeeper: `2181`
  * Kafka: `9092`
  * Services: `5000`, `5001`, `5002`
* Replace any secrets from the compose file with environment variables/.env files—don’t hardcode.

# 1) Windows (Recommended: WSL2 Ubuntu)

1. Enable WSL2 + install Ubuntu from Store (if not already).

2. Open Ubuntu and install base tooling:

   ```bash
   sudo apt update
   sudo apt install -y curl gnupg lsb-release unzip
   ```

3. Install Node.js LTS:

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs build-essential
   node -v && npm -v
   ```

4. Install Java (Kafka needs it):

   ```bash
   sudo apt install -y openjdk-17-jre
   java -version
   ```

5. Install Redis:

   ```bash
   sudo apt install -y redis-server
   # enable TCP and daemon if needed
   sudo sed -i 's/^supervised .*/supervised systemd/' /etc/redis/redis.conf
   sudo systemctl enable --now redis-server
   redis-cli ping  # should return PONG
   ```

6. Install Apache Kafka (ZooKeeper mode, to match your compose):

   ```bash
   KVER=3.7.0
   SCALA=2.13
   curl -L -o kafka.tgz https://downloads.apache.org/kafka/${KVER}/kafka_${SCALA}-${KVER}.tgz
   tar -xzf kafka.tgz && mv kafka_${SCALA}-${KVER} kafka && rm kafka.tgz
   ```

7. Configure and start ZooKeeper:

   ```bash
   cd kafka
   # default config works; ensure clientPort=2181 in config/zookeeper.properties
   bin/zookeeper-server-start.sh -daemon config/zookeeper.properties
   ```

8. Configure and start Kafka broker:

   ```bash
   # set listeners to localhost so your apps can reach it
   echo "listeners=PLAINTEXT://:9092" | sudo tee -a config/server.properties
   echo "advertised.listeners=PLAINTEXT://localhost:9092" | sudo tee -a config/server.properties
   echo "zookeeper.connect=localhost:2181" | sudo tee -a config/server.properties
   bin/kafka-server-start.sh -daemon config/server.properties
   # sanity check
   bin/kafka-topics.sh --bootstrap-server localhost:9092 --list
   ```

   (Create topics later if your services expect specific ones.)

9. Create per-service `.env` files (recommended) in each backend folder:

   `backend/authService/.env`

   ```
   PORT=5000
   MONGO_URI=mongodb+srv://<your-user>:<your-pass>@cluster0.gp5lvzy.mongodb.net/intsheep
   JWT_SECRET=replace_this
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   KAFKA_BROKERS=127.0.0.1:9092
   ```

   `backend/userService/.env`

   ```
   PORT=5001
   MONGO_URI=mongodb+srv://<your-user>:<your-pass>@cluster0.gp5lvzy.mongodb.net/intsheep
   JWT_SECRET=replace_this
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   AWS_REGION=ap-south-1
   AWS_ACCESS_KEY_ID=<<set in your shell or here>>
   AWS_SECRET_ACCESS_KEY=<<set in your shell or here>>
   AWS_S3_BUCKET_NAME=internsheep
   KAFKA_BROKERS=127.0.0.1:9092
   ```

   `backend/companyService/.env`

   ```
   PORT=5002
   MONGO_URI=mongodb+srv://<your-user>:<your-pass>@cluster0.gp5lvzy.mongodb.net/intsheep
   JWT_SECRET=replace_this
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   AWS_REGION=ap-south-1
   AWS_ACCESS_KEY_ID=<<set in your shell or here>>
   AWS_SECRET_ACCESS_KEY=<<set in your shell or here>>
   AWS_S3_BUCKET_NAME=internsheep
   KAFKA_BROKERS=127.0.0.1:9092
   ```

   Notes:

   * Use `localhost` / `127.0.0.1` for Redis and Kafka (not `redis` or `kafka`, which were Docker hostnames).
   * Keep secrets in your shell, not in git:
     `export AWS_ACCESS_KEY_ID=...; export AWS_SECRET_ACCESS_KEY=...`

10. Install dependencies & run each service:

```bash
cd backend/authService && npm ci && npm run start   # or npm run dev
# in a new terminal
cd backend/userService && npm ci && npm run start
# in a new terminal
cd backend/companyService && npm ci && npm run start
```

11. Optional: create Kafka topics your services need:

```bash
cd ~/kafka
bin/kafka-topics.sh --bootstrap-server localhost:9092 --create --topic users --partitions 1 --replication-factor 1
bin/kafka-topics.sh --bootstrap-server localhost:9092 --create --topic companies --partitions 1 --replication-factor 1
bin/kafka-topics.sh --bootstrap-server localhost:9092 --list
```

12. Quick health checks:

```bash
curl -f http://localhost:5000/health || echo "authservice not up"
curl -f http://localhost:5001/health || echo "userservice not up"
curl -f http://localhost:5002/health || echo "companyservice not up"
redis-cli ping
```

# 2) Native Linux (Ubuntu/Debian) or macOS

* Steps are the same as WSL2 minus the WSL setup.
* macOS:

  ```bash
  # Homebrew
  brew install node@20 redis openjdk
  brew services start redis
  java -version
  # Kafka
  KVER=3.7.0; SCALA=2.13
  curl -L -o kafka.tgz https://downloads.apache.org/kafka/${KVER}/kafka_${SCALA}-${KVER}.tgz
  tar -xzf kafka.tgz && mv kafka_${SCALA}-${KVER} kafka && rm kafka.tgz
  # start zookeeper, then kafka (same as above)
  ```
* Then create `.env` files and `npm ci && npm run start` in each service.

# 3) Code-side tweaks (if needed)

* Ensure each service reads env vars (typical Node.js):

  ```js
  // config.js
  require('dotenv').config();

  module.exports = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    redis: { host: process.env.REDIS_HOST || '127.0.0.1', port: Number(process.env.REDIS_PORT || 6379) },
    kafkaBrokers: (process.env.KAFKA_BROKERS || '127.0.0.1:9092').split(','),
  };
  ```
* Replace any Docker hostnames (`redis`, `kafka`) with `127.0.0.1` via envs (as shown).
* If your Kafka client library relied on `KAFKA_ADVERTISED_LISTENERS` behavior from Docker, it’s now irrelevant: clients just use `KAFKA_BROKERS=127.0.0.1:9092`.

# 4) Order of startup

1. Redis
2. ZooKeeper
3. Kafka
4. Your services (auth → user → company is fine, but order isn’t critical once infra is up)

# 5) Common pitfalls to check

* **Atlas IP**: Make sure your current public IP is whitelisted in MongoDB Atlas.
* **Firewall**: Ensure 2181/9092/6379 are not blocked locally.
* **Kafka “Connection to node 0 could not be established”**: Verify `advertised.listeners=PLAINTEXT://localhost:9092` and that you’re connecting to `127.0.0.1:9092`.
* **Redis auth**: If you enable a password in redis.conf, reflect it in your service configs.
* **AWS creds**: Don’t commit them. Prefer environment variables or a profile/role when you move to cloud.
