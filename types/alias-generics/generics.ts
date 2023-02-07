function push<T, U>(items: T[], item: U): (T | U)[] {
    return [...items, item]
}

push(['test'], 1);