dev:
	@docker compose down
	@docker compose -f dev.compose.yml up -d --wait
	@node ace migration:fresh
	@pnpm run dev

prod:
	@docker compose -f dev.compose.yml down
	@docker compose up -d --wait --build
	@node ace db:seed

down:
	@-docker compose -f dev.compose.yml down
