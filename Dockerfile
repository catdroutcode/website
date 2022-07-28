# Dockerfile

# base image
FROM node:alpine

ENV NEXT_TELEMETRY_DISABLED=1
# ENV NODE_ENV=production

# directory
WORKDIR /usr/src

# copy source files
COPY . .

# install dependencies
RUN npm i

# start app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
