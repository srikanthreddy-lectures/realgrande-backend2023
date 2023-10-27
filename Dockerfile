FROM node
WORKDIR /app
COPY . /app
COPY ../.env /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
