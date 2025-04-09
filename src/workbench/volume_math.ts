// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_MATH_METADATA: Metadata = {
    id: "1aae43835d25efb950ce2c23cfb259c2519d3798.boutiques",
    name: "volume-math",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeMathVarParameters {
    "__STYXTYPE__": "var";
    "name": string;
    "volume": InputPathType;
    "opt_subvolume_subvol"?: string | null | undefined;
    "opt_repeat": boolean;
}


interface VolumeMathParameters {
    "__STYXTYPE__": "volume-math";
    "expression": string;
    "volume_out": string;
    "opt_fixnan_replace"?: number | null | undefined;
    "var"?: Array<VolumeMathVarParameters> | null | undefined;
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
        "volume-math": volume_math_cargs,
        "var": volume_math_var_cargs,
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
        "volume-math": volume_math_outputs,
    };
    return outputsFuncs[t];
}


function volume_math_var_params(
    name: string,
    volume: InputPathType,
    opt_subvolume_subvol: string | null = null,
    opt_repeat: boolean = false,
): VolumeMathVarParameters {
    /**
     * Build parameters.
    
     * @param name the name of the variable, as used in the expression
     * @param volume the volume file to use as this variable
     * @param opt_subvolume_subvol select a single subvolume: the subvolume number or name
     * @param opt_repeat reuse a single subvolume for each subvolume of calculation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "var" as const,
        "name": name,
        "volume": volume,
        "opt_repeat": opt_repeat,
    };
    if (opt_subvolume_subvol !== null) {
        params["opt_subvolume_subvol"] = opt_subvolume_subvol;
    }
    return params;
}


function volume_math_var_cargs(
    params: VolumeMathVarParameters,
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
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    if ((params["opt_subvolume_subvol"] ?? null) !== null) {
        cargs.push(
            "-subvolume",
            (params["opt_subvolume_subvol"] ?? null)
        );
    }
    if ((params["opt_repeat"] ?? null)) {
        cargs.push("-repeat");
    }
    return cargs;
}


/**
 * Output object returned when calling `volume_math(...)`.
 *
 * @interface
 */
interface VolumeMathOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume
     */
    volume_out: OutputPathType;
}


function volume_math_params(
    expression: string,
    volume_out: string,
    opt_fixnan_replace: number | null = null,
    var_: Array<VolumeMathVarParameters> | null = null,
): VolumeMathParameters {
    /**
     * Build parameters.
    
     * @param expression the expression to evaluate, in quotes
     * @param volume_out the output volume
     * @param opt_fixnan_replace replace NaN results with a value: value to replace NaN with
     * @param var_ a volume file to use as a variable
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-math" as const,
        "expression": expression,
        "volume_out": volume_out,
    };
    if (opt_fixnan_replace !== null) {
        params["opt_fixnan_replace"] = opt_fixnan_replace;
    }
    if (var_ !== null) {
        params["var"] = var_;
    }
    return params;
}


function volume_math_cargs(
    params: VolumeMathParameters,
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
    cargs.push("-volume-math");
    cargs.push((params["expression"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["opt_fixnan_replace"] ?? null) !== null) {
        cargs.push(
            "-fixnan",
            String((params["opt_fixnan_replace"] ?? null))
        );
    }
    if ((params["var"] ?? null) !== null) {
        cargs.push(...(params["var"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function volume_math_outputs(
    params: VolumeMathParameters,
    execution: Execution,
): VolumeMathOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeMathOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_math_execute(
    params: VolumeMathParameters,
    execution: Execution,
): VolumeMathOutputs {
    /**
     * Evaluate expression on volume files.
     * 
     * This command evaluates <expression> at each voxel independently.  There must be at least one -var option (to get the volume space from), even if the <name> specified in it isn't used in <expression>.  All volumes must have the same volume space.  Filenames are not valid in <expression>, use a variable name and a -var option with matching <name> to specify an input file.  If the -subvolume option is given to any -var option, only one subvolume is used from that file.  If -repeat is specified, the file must either have only one subvolume, or have the -subvolume option specified.  All files that don't use -repeat must have the same number of subvolumes requested to be used.  The format of <expression> is as follows:
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
    
     * @returns NamedTuple of outputs (described in `VolumeMathOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_math_cargs(params, execution)
    const ret = volume_math_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_math(
    expression: string,
    volume_out: string,
    opt_fixnan_replace: number | null = null,
    var_: Array<VolumeMathVarParameters> | null = null,
    runner: Runner | null = null,
): VolumeMathOutputs {
    /**
     * Evaluate expression on volume files.
     * 
     * This command evaluates <expression> at each voxel independently.  There must be at least one -var option (to get the volume space from), even if the <name> specified in it isn't used in <expression>.  All volumes must have the same volume space.  Filenames are not valid in <expression>, use a variable name and a -var option with matching <name> to specify an input file.  If the -subvolume option is given to any -var option, only one subvolume is used from that file.  If -repeat is specified, the file must either have only one subvolume, or have the -subvolume option specified.  All files that don't use -repeat must have the same number of subvolumes requested to be used.  The format of <expression> is as follows:
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
     * @param volume_out the output volume
     * @param opt_fixnan_replace replace NaN results with a value: value to replace NaN with
     * @param var_ a volume file to use as a variable
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeMathOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_MATH_METADATA);
    const params = volume_math_params(expression, volume_out, opt_fixnan_replace, var_)
    return volume_math_execute(params, execution);
}


export {
      VOLUME_MATH_METADATA,
      VolumeMathOutputs,
      VolumeMathParameters,
      VolumeMathVarParameters,
      volume_math,
      volume_math_params,
      volume_math_var_params,
};
