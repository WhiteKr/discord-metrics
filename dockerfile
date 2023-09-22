FROM node:19-alpine3.17

WORKDIR /app

RUN npm i -g pnpm

COPY ./package.json /app/
COPY ./pnpm-lock.yaml /app/

# RUN yarn install
RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm build

CMD [ "pnpm", "start" ]
