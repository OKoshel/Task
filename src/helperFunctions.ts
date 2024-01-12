
export const reverseArr = <T>(arr: T[]): T[]  => {
    return arr.reverse()
}

function entryValueToStringForFlatMap([key, value]: [
    key: string,
    value: unknown
]): [string, string][] {
    if (value === null || value === undefined) {
        return [];
    }
    if (Array.isArray(value)) {
        return value.flatMap<[string, string]>((v, i) =>
            entryValueToStringForFlatMap([`${key}[${i}]`, v])
        );
    }
    if (value instanceof Date) {
        return [[key, value.toISOString()]];
    }

    if (typeof value === "object") {
        return Object.entries(value).flatMap(entryValueToStringForFlatMap);
    }

    if (typeof value === "boolean") {
        return [[key, Number(value).toString()]];
    }
    return [[key, value.toString()]];
}

export function getUrlSearchParams<Type extends object = {}>(
    values: Type
): URLSearchParams {
    let newObject: Record<string, string> = Object.fromEntries<string>(
        Object.entries(values).flatMap(entryValueToStringForFlatMap)
    );
    return new URLSearchParams(newObject);
}