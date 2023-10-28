FROM node
WORKDIR /app
COPY . /app
USER root
RUN cp /home/ubuntu/backend/.env /app
USER node
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
