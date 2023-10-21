FROM node:20 as builder
WORKDIR /app

RUN npm -g install pnpm

COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN pnpm install

COPY . .
RUN pnpm build

FROM node:20-alpine as production
WORKDIR /app

RUN npm -g install pnpm

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

COPY --from=builder /app/dist ./dist

CMD [ "pnpm", "start" ]
