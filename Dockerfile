FROM node
WORKDIR /app
COPY . /app
RUN ["cp","/home/ubuntu/backend/","/app"]
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
