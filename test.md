npm run start:backend
npm run start:frontend
npm test -- --verbose
npm test -- --coverage

npm install supertest@latest jest@latest --save-dev

docker-compose up --build
docker-compose down
docker build -t my-airflow .
docker run -p 8080:8080 my-airflow

docker run -it my-airflow /bin/bash
