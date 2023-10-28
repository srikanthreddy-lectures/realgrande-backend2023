FROM node
WORKDIR /app
COPY . /app
RUN ["cp","/home/ubuntu/test.dat","/app"]
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
