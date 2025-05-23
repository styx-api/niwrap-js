// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1DGEN_ARMA11_METADATA: Metadata = {
    id: "d3d64709ffedbcb6d22bdf6adacec22853afa9ab.boutiques",
    name: "1dgenARMA11",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dgenArma11Parameters {
    "__STYXTYPE__": "1dgenARMA11";
    "length"?: number | null | undefined;
    "length_alt"?: number | null | undefined;
    "num_series"?: number | null | undefined;
    "param_a"?: number | null | undefined;
    "param_b"?: number | null | undefined;
    "param_lam"?: number | null | undefined;
    "std_dev"?: number | null | undefined;
    "normalize": boolean;
    "seed"?: number | null | undefined;
    "corcut"?: number | null | undefined;
    "arma31"?: string | null | undefined;
    "arma51"?: string | null | undefined;
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
        "1dgenARMA11": v_1dgen_arma11_cargs,
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
        "1dgenARMA11": v_1dgen_arma11_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1dgen_arma11(...)`.
 *
 * @interface
 */
interface V1dgenArma11Outputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated ARMA(1,1) time series
     */
    output: OutputPathType;
}


function v_1dgen_arma11_params(
    length: number | null = null,
    length_alt: number | null = null,
    num_series: number | null = null,
    param_a: number | null = null,
    param_b: number | null = null,
    param_lam: number | null = null,
    std_dev: number | null = null,
    normalize: boolean = false,
    seed: number | null = null,
    corcut: number | null = null,
    arma31: string | null = null,
    arma51: string | null = null,
): V1dgenArma11Parameters {
    /**
     * Build parameters.
    
     * @param length Specify the length of the time series vector to generate (equivalent to -len option).
     * @param length_alt Specify the length of the time series vector to generate (equivalent to -num option).
     * @param num_series The number of time series vectors to generate; defaults to 1 if not given.
     * @param param_a Specify ARMA(1,1) parameters 'a'.
     * @param param_b Specify ARMA(1,1) parameter 'b' directly.
     * @param param_lam Specify ARMA(1,1) parameter 'b' indirectly.
     * @param std_dev Set standard deviation of results [default=1].
     * @param normalize Normalize time series so sum of squares is 1.
     * @param seed Set random number seed.
     * @param corcut Specify a cutoff for the correlation coefficient r(k) of noise samples at k units apart. Default is 0.00010.
     * @param arma31 Specify parameters for a restricted ARMA(3,1) model: -arma31 a r theta vrat
     * @param arma51 Specify parameters for a restricted ARMA(5,1) model: -arma51 a r1 theta1 r2 theta2 vrat
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dgenARMA11" as const,
        "normalize": normalize,
    };
    if (length !== null) {
        params["length"] = length;
    }
    if (length_alt !== null) {
        params["length_alt"] = length_alt;
    }
    if (num_series !== null) {
        params["num_series"] = num_series;
    }
    if (param_a !== null) {
        params["param_a"] = param_a;
    }
    if (param_b !== null) {
        params["param_b"] = param_b;
    }
    if (param_lam !== null) {
        params["param_lam"] = param_lam;
    }
    if (std_dev !== null) {
        params["std_dev"] = std_dev;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (corcut !== null) {
        params["corcut"] = corcut;
    }
    if (arma31 !== null) {
        params["arma31"] = arma31;
    }
    if (arma51 !== null) {
        params["arma51"] = arma51;
    }
    return params;
}


function v_1dgen_arma11_cargs(
    params: V1dgenArma11Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dgenARMA11");
    if ((params["length"] ?? null) !== null) {
        cargs.push(
            "-num",
            String((params["length"] ?? null))
        );
    }
    if ((params["length_alt"] ?? null) !== null) {
        cargs.push(
            "-len",
            String((params["length_alt"] ?? null))
        );
    }
    if ((params["num_series"] ?? null) !== null) {
        cargs.push(
            "-nvec",
            String((params["num_series"] ?? null))
        );
    }
    if ((params["param_a"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["param_a"] ?? null))
        );
    }
    if ((params["param_b"] ?? null) !== null) {
        cargs.push(
            "-b",
            String((params["param_b"] ?? null))
        );
    }
    if ((params["param_lam"] ?? null) !== null) {
        cargs.push(
            "-lam",
            String((params["param_lam"] ?? null))
        );
    }
    if ((params["std_dev"] ?? null) !== null) {
        cargs.push(
            "-sig",
            String((params["std_dev"] ?? null))
        );
    }
    if ((params["normalize"] ?? null)) {
        cargs.push("-norm");
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["corcut"] ?? null) !== null) {
        cargs.push(
            "-CORcut",
            String((params["corcut"] ?? null))
        );
    }
    if ((params["arma31"] ?? null) !== null) {
        cargs.push(
            "-arma31",
            (params["arma31"] ?? null)
        );
    }
    if ((params["arma51"] ?? null) !== null) {
        cargs.push(
            "-arma51",
            (params["arma51"] ?? null)
        );
    }
    return cargs;
}


function v_1dgen_arma11_outputs(
    params: V1dgenArma11Parameters,
    execution: Execution,
): V1dgenArma11Outputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dgenArma11Outputs = {
        root: execution.outputFile("."),
        output: execution.outputFile(["stdout"].join('')),
    };
    return ret;
}


function v_1dgen_arma11_execute(
    params: V1dgenArma11Parameters,
    execution: Execution,
): V1dgenArma11Outputs {
    /**
     * Program to generate an ARMA(1,1) time series, for simulation studies. Results are written to stdout.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dgenArma11Outputs`).
     */
    params = execution.params(params)
    const cargs = v_1dgen_arma11_cargs(params, execution)
    const ret = v_1dgen_arma11_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1dgen_arma11(
    length: number | null = null,
    length_alt: number | null = null,
    num_series: number | null = null,
    param_a: number | null = null,
    param_b: number | null = null,
    param_lam: number | null = null,
    std_dev: number | null = null,
    normalize: boolean = false,
    seed: number | null = null,
    corcut: number | null = null,
    arma31: string | null = null,
    arma51: string | null = null,
    runner: Runner | null = null,
): V1dgenArma11Outputs {
    /**
     * Program to generate an ARMA(1,1) time series, for simulation studies. Results are written to stdout.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param length Specify the length of the time series vector to generate (equivalent to -len option).
     * @param length_alt Specify the length of the time series vector to generate (equivalent to -num option).
     * @param num_series The number of time series vectors to generate; defaults to 1 if not given.
     * @param param_a Specify ARMA(1,1) parameters 'a'.
     * @param param_b Specify ARMA(1,1) parameter 'b' directly.
     * @param param_lam Specify ARMA(1,1) parameter 'b' indirectly.
     * @param std_dev Set standard deviation of results [default=1].
     * @param normalize Normalize time series so sum of squares is 1.
     * @param seed Set random number seed.
     * @param corcut Specify a cutoff for the correlation coefficient r(k) of noise samples at k units apart. Default is 0.00010.
     * @param arma31 Specify parameters for a restricted ARMA(3,1) model: -arma31 a r theta vrat
     * @param arma51 Specify parameters for a restricted ARMA(5,1) model: -arma51 a r1 theta1 r2 theta2 vrat
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dgenArma11Outputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1DGEN_ARMA11_METADATA);
    const params = v_1dgen_arma11_params(length, length_alt, num_series, param_a, param_b, param_lam, std_dev, normalize, seed, corcut, arma31, arma51)
    return v_1dgen_arma11_execute(params, execution);
}


export {
      V1dgenArma11Outputs,
      V1dgenArma11Parameters,
      V_1DGEN_ARMA11_METADATA,
      v_1dgen_arma11,
      v_1dgen_arma11_params,
};
