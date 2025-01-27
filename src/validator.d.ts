export type LottieValidatorError = {
    type: 'error' | 'warning',
    warning: 'type' | 'property',
    path_names?: string[],
    message: string,
    path: string,
    name: string,
    docs: string,
}

export type LottieValidatorConfig = {
    name_paths?: boolean;
    docs_url?: string;
}
export class LottieValidator {
    constructor(AjvClass: any, schema_json: Object, config?: LottieValidatorConfig);
    validate(data: Object, show_warnings?:boolean): LottieValidatorError[];
}
