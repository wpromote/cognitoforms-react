.DEFAULT_GOAL=main

main:
	@npm run build
publish:
	@npm run build && npm publish
