new App(
    new Pages(
        new Home(
            new Modules(
                new Todos(
                    new Actions(
                        new AddTodo(),
                        new DeleteTodo()
                    ),
                    new Selectors(
                        new
                    )
                ),
                new Calendar()
            )
        ),
        new Dashboard(),
        new UserOrders()
    )
).init();