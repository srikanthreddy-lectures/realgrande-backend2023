FROM node
WORKDIR /app
COPY . /app
RUN sudo cp /home/ubuntu/backend/test /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
