FROM node

# set working directory
WORKDIR /byke

# copy files from host to container
COPY ./package.json .
COPY ./build .

RUN corepack enable
RUN corepack prepare pnpm@7.9.5 --activate
RUN pnpm install --prod --ignore-scripts


ENV NODE_ENV production
ENV PORT 80
EXPOSE  $PORT

CMD ["pnpm", "start"]