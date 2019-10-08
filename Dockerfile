FROM node:10

# Setting working directory. All paths will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing deps
COPY package*.json ./
RUN yarn install

# Copy source
COPY . .

# Building application
RUN yarn build

# Running
CMD [ "yarn", "start" ]


