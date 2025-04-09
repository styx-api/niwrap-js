// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_MATH_METADATA: Metadata = {
    id: "0d1508ca7f8593d6202d6d3c6afb88c2aa2275b8.boutiques",
    name: "cifti-math",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiMathSelectParameters {
    "__STYXTYPE__": "select";
    "dim": number;
    "index": string;
    "opt_repeat": boolean;
}


interface CiftiMathVarParameters {
    "__STYXTYPE__": "var";
    "name": string;
    "cifti": InputPathType;
    "select"?: Array<CiftiMathSelectParameters> | null | undefined;
}


interface CiftiMathParameters {
    "__STYXTYPE__": "cifti-math";
    "expression": string;
    "cifti_out": string;
    "opt_fixnan_replace"?: number | null | undefined;
    "opt_override_mapping_check": boolean;
    "var"?: Array<CiftiMathVarParameters> | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "cifti-math": cifti_math_cargs,
        "var": cifti_math_var_cargs,
        "select": cifti_math_select_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "cifti-math": cifti_math_outputs,
    };
    return outputsFuncs[t];
}


function cifti_math_select_params(
    dim: number,
    index: string,
    opt_repeat: boolean = false,
): CiftiMathSelectParameters {
    /**
     * Build parameters.
    
     * @param dim the dimension to select from (1-based)
     * @param index the index number (1-based) or map name to use
     * @param opt_repeat repeat the selected values for each index of output in this dimension
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "select" as const,
        "dim": dim,
        "index": index,
        "opt_repeat": opt_repeat,
    };
    return params;
}


function cifti_math_select_cargs(
    params: CiftiMathSelectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-select");
    cargs.push(String((params["dim"] ?? null)));
    cargs.push((params["index"] ?? null));
    if ((params["opt_repeat"] ?? null)) {
        cargs.push("-repeat");
    }
    return cargs;
}


function cifti_math_var_params(
    name: string,
    cifti: InputPathType,
    select: Array<CiftiMathSelectParameters> | null = null,
): CiftiMathVarParameters {
    /**
     * Build parameters.
    
     * @param name the name of the variable, as used in the expression
     * @param cifti the cifti file to use as this variable
     * @param select select a single index from a dimension
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "var" as const,
        "name": name,
        "cifti": cifti,
    };
    if (select !== null) {
        params["select"] = select;
    }
    return params;
}


function cifti_math_var_cargs(
    params: CiftiMathVarParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-var");
    cargs.push((params["name"] ?? null));
    cargs.push(execution.inputFile((params["cifti"] ?? null)));
    if ((params["select"] ?? null) !== null) {
        cargs.push(...(params["select"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_math(...)`.
 *
 * @interface
 */
interface CiftiMathOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_math_params(
    expression: string,
    cifti_out: string,
    opt_fixnan_replace: number | null = null,
    opt_override_mapping_check: boolean = false,
    var_: Array<CiftiMathVarParameters> | null = null,
): CiftiMathParameters {
    /**
     * Build parameters.
    
     * @param expression the expression to evaluate, in quotes
     * @param cifti_out the output cifti file
     * @param opt_fixnan_replace replace NaN results with a value: value to replace NaN with
     * @param opt_override_mapping_check don't check the mappings for compatibility, only check length
     * @param var_ a cifti file to use as a variable
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-math" as const,
        "expression": expression,
        "cifti_out": cifti_out,
        "opt_override_mapping_check": opt_override_mapping_check,
    };
    if (opt_fixnan_replace !== null) {
        params["opt_fixnan_replace"] = opt_fixnan_replace;
    }
    if (var_ !== null) {
        params["var"] = var_;
    }
    return params;
}


function cifti_math_cargs(
    params: CiftiMathParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-math");
    cargs.push((params["expression"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_fixnan_replace"] ?? null) !== null) {
        cargs.push(
            "-fixnan",
            String((params["opt_fixnan_replace"] ?? null))
        );
    }
    if ((params["opt_override_mapping_check"] ?? null)) {
        cargs.push("-override-mapping-check");
    }
    if ((params["var"] ?? null) !== null) {
        cargs.push(...(params["var"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_math_outputs(
    params: CiftiMathParameters,
    execution: Execution,
): CiftiMathOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiMathOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_math_execute(
    params: CiftiMathParameters,
    execution: Execution,
): CiftiMathOutputs {
    /**
     * Evaluate expression on cifti files.
     * 
     * This command evaluates <expression> at each matrix element independently.  There must be at least one -var option (to get the output layout from), even if the <name> specified in it isn't used in <expression>.
     * 
     * To select a single column from a 2D file (most cifti files are 2D), use -select 1 <index>, where <index> is 1-based.  To select a single row from a 2D file, use -select 2 <index>.  Where -select is not used, the cifti files must have compatible mappings (e.g., brain models and parcels mappings must match exactly except for parcel names).  Use -override-mapping-check to skip this checking.
     * 
     * Filenames are not valid in <expression>, use a variable name and a -var option with matching <name> to specify an input file.  The format of <expression> is as follows:
     * 
     * Expressions consist of constants, variables, operators, parentheses, and functions, in infix notation, such as 'exp(-x + 3) * scale'.  Variables are strings of any length, using the characters a-z, A-Z, 0-9, and _, but may not take the name of a named constant.  Currently, there is only one named constant, PI.  The operators are +, -, *, /, ^, >, <, >=, <=, ==, !=, !, &&, ||.  These behave as in C, except that ^ is exponentiation, i.e. pow(x, y), and takes higher precedence than other binary operators (also, '-3^-4^-5' means '-(3^(-(4^-5)))').  The <=, >=, ==, and != operators are given a small amount of wiggle room, equal to one millionth of the smaller of the absolute values of the values being compared.
     * 
     * Comparison and logical operators return 0 or 1, you can do masking with expressions like 'x * (mask > 0)'.  For all logical operators, an input is considered true iff it is greater than 0.  The expression '0 < x < 5' is not syntactically wrong, but it will NOT do what is desired, because it is evaluated left to right, i.e. '((0 < x) < 5)', which will always return 1, as both possible results of a comparison are less than 5.  A warning is generated if an expression of this type is detected.  Use something like 'x > 0 && x < 5' to get the desired behavior.
     * 
     * Whitespace between elements is ignored, ' sin ( 2 * x ) ' is equivalent to 'sin(2*x)', but 's in(2*x)' is an error.  Implied multiplication is not allowed, the expression '2x' will be parsed as a variable.  Parentheses are (), do not use [] or {}.  Functions require parentheses, the expression 'sin x' is an error.
     * 
     * The following functions are supported:
     * 
     *    sin: 1 argument, the sine of the argument (units are radians)
     *    cos: 1 argument, the cosine of the argument (units are radians)
     *    tan: 1 argument, the tangent of the argument (units are radians)
     *    asin: 1 argument, the inverse of sine of the argument, in radians
     *    acos: 1 argument, the inverse of cosine of the argument, in radians
     *    atan: 1 argument, the inverse of tangent of the argument, in radians
     *    atan2: 2 arguments, atan2(y, x) returns the inverse of tangent of (y/x), in radians, determining quadrant by the sign of both arguments
     *    sinh: 1 argument, the hyperbolic sine of the argument
     *    cosh: 1 argument, the hyperbolic cosine of the argument
     *    tanh: 1 argument, the hyperbolic tangent of the argument
     *    asinh: 1 argument, the inverse hyperbolic sine of the argument
     *    acosh: 1 argument, the inverse hyperbolic cosine of the argument
     *    atanh: 1 argument, the inverse hyperbolic tangent of the argument
     *    sinc: 1 argument, sinc(0) = 1, sin(x) / x otherwise
     *    ln: 1 argument, the natural logarithm of the argument
     *    exp: 1 argument, the constant e raised to the power of the argument
     *    log: 1 argument, the base 10 logarithm of the argument
     *    log2: 1 argument, the base 2 logarithm of the argument
     *    sqrt: 1 argument, the square root of the argument
     *    abs: 1 argument, the absolute value of the argument
     *    floor: 1 argument, the largest integer not greater than the argument
     *    round: 1 argument, the nearest integer, with ties rounded away from zero
     *    ceil: 1 argument, the smallest integer not less than the argument
     *    min: 2 arguments, min(x, y) returns y if (x > y), x otherwise
     *    max: 2 arguments, max(x, y) returns y if (x < y), x otherwise
     *    mod: 2 arguments, mod(x, y) = x - y * floor(x / y), or 0 if y == 0
     *    clamp: 3 arguments, clamp(x, low, high) = min(max(x, low), high)
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiMathOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_math_cargs(params, execution)
    const ret = cifti_math_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_math(
    expression: string,
    cifti_out: string,
    opt_fixnan_replace: number | null = null,
    opt_override_mapping_check: boolean = false,
    var_: Array<CiftiMathVarParameters> | null = null,
    runner: Runner | null = null,
): CiftiMathOutputs {
    /**
     * Evaluate expression on cifti files.
     * 
     * This command evaluates <expression> at each matrix element independently.  There must be at least one -var option (to get the output layout from), even if the <name> specified in it isn't used in <expression>.
     * 
     * To select a single column from a 2D file (most cifti files are 2D), use -select 1 <index>, where <index> is 1-based.  To select a single row from a 2D file, use -select 2 <index>.  Where -select is not used, the cifti files must have compatible mappings (e.g., brain models and parcels mappings must match exactly except for parcel names).  Use -override-mapping-check to skip this checking.
     * 
     * Filenames are not valid in <expression>, use a variable name and a -var option with matching <name> to specify an input file.  The format of <expression> is as follows:
     * 
     * Expressions consist of constants, variables, operators, parentheses, and functions, in infix notation, such as 'exp(-x + 3) * scale'.  Variables are strings of any length, using the characters a-z, A-Z, 0-9, and _, but may not take the name of a named constant.  Currently, there is only one named constant, PI.  The operators are +, -, *, /, ^, >, <, >=, <=, ==, !=, !, &&, ||.  These behave as in C, except that ^ is exponentiation, i.e. pow(x, y), and takes higher precedence than other binary operators (also, '-3^-4^-5' means '-(3^(-(4^-5)))').  The <=, >=, ==, and != operators are given a small amount of wiggle room, equal to one millionth of the smaller of the absolute values of the values being compared.
     * 
     * Comparison and logical operators return 0 or 1, you can do masking with expressions like 'x * (mask > 0)'.  For all logical operators, an input is considered true iff it is greater than 0.  The expression '0 < x < 5' is not syntactically wrong, but it will NOT do what is desired, because it is evaluated left to right, i.e. '((0 < x) < 5)', which will always return 1, as both possible results of a comparison are less than 5.  A warning is generated if an expression of this type is detected.  Use something like 'x > 0 && x < 5' to get the desired behavior.
     * 
     * Whitespace between elements is ignored, ' sin ( 2 * x ) ' is equivalent to 'sin(2*x)', but 's in(2*x)' is an error.  Implied multiplication is not allowed, the expression '2x' will be parsed as a variable.  Parentheses are (), do not use [] or {}.  Functions require parentheses, the expression 'sin x' is an error.
     * 
     * The following functions are supported:
     * 
     *    sin: 1 argument, the sine of the argument (units are radians)
     *    cos: 1 argument, the cosine of the argument (units are radians)
     *    tan: 1 argument, the tangent of the argument (units are radians)
     *    asin: 1 argument, the inverse of sine of the argument, in radians
     *    acos: 1 argument, the inverse of cosine of the argument, in radians
     *    atan: 1 argument, the inverse of tangent of the argument, in radians
     *    atan2: 2 arguments, atan2(y, x) returns the inverse of tangent of (y/x), in radians, determining quadrant by the sign of both arguments
     *    sinh: 1 argument, the hyperbolic sine of the argument
     *    cosh: 1 argument, the hyperbolic cosine of the argument
     *    tanh: 1 argument, the hyperbolic tangent of the argument
     *    asinh: 1 argument, the inverse hyperbolic sine of the argument
     *    acosh: 1 argument, the inverse hyperbolic cosine of the argument
     *    atanh: 1 argument, the inverse hyperbolic tangent of the argument
     *    sinc: 1 argument, sinc(0) = 1, sin(x) / x otherwise
     *    ln: 1 argument, the natural logarithm of the argument
     *    exp: 1 argument, the constant e raised to the power of the argument
     *    log: 1 argument, the base 10 logarithm of the argument
     *    log2: 1 argument, the base 2 logarithm of the argument
     *    sqrt: 1 argument, the square root of the argument
     *    abs: 1 argument, the absolute value of the argument
     *    floor: 1 argument, the largest integer not greater than the argument
     *    round: 1 argument, the nearest integer, with ties rounded away from zero
     *    ceil: 1 argument, the smallest integer not less than the argument
     *    min: 2 arguments, min(x, y) returns y if (x > y), x otherwise
     *    max: 2 arguments, max(x, y) returns y if (x < y), x otherwise
     *    mod: 2 arguments, mod(x, y) = x - y * floor(x / y), or 0 if y == 0
     *    clamp: 3 arguments, clamp(x, low, high) = min(max(x, low), high)
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param expression the expression to evaluate, in quotes
     * @param cifti_out the output cifti file
     * @param opt_fixnan_replace replace NaN results with a value: value to replace NaN with
     * @param opt_override_mapping_check don't check the mappings for compatibility, only check length
     * @param var_ a cifti file to use as a variable
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiMathOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_MATH_METADATA);
    const params = cifti_math_params(expression, cifti_out, opt_fixnan_replace, opt_override_mapping_check, var_)
    return cifti_math_execute(params, execution);
}


export {
      CIFTI_MATH_METADATA,
      CiftiMathOutputs,
      CiftiMathParameters,
      CiftiMathSelectParameters,
      CiftiMathVarParameters,
      cifti_math,
      cifti_math_params,
      cifti_math_select_params,
      cifti_math_var_params,
};
