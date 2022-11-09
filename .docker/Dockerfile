FROM node

# Specify working directory in docker container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Make ssh dir
RUN mkdir /root/.ssh/

# Add the keys and set permissions
ARG SSH_KEY
RUN echo "$SSH_KEY" > /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

# Add bitbuckets key
RUN ssh-keyscan -T 60 bitbucket.org >> /root/.ssh/known_hosts

# Install node dependencies
COPY package*.json ./
RUN npm install

# Multi-stage: Keep only what we need wiping the ssh key.
FROM node
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app .
CMD ["npm", "run", "dev"]