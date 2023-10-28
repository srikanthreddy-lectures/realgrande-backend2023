FROM node
WORKDIR /app
COPY . /app
ADD sudo /home/ubuntu/backend/test /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
