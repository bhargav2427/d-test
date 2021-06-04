FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# RUN git clone https://github.com/bhargav2427/d-test.git

RUN mkdir /home/app

COPY . /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install

WORKDIR /home/app/app

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "server.js"]

