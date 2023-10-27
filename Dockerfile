FROM node
WORKDIR /app
COPY . /app
COPY /home/ubuntu/backend/.env /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
