// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DCALC_METADATA: Metadata = {
    id: "34983276632d5f12085998aa5812bfe380a32306.boutiques",
    name: "3dcalc",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dcalcParameters {
    "__STYXTYPE__": "3dcalc";
    "in_file_a": InputPathType;
    "in_file_b"?: InputPathType | null | undefined;
    "in_file_c"?: InputPathType | null | undefined;
    "other"?: InputPathType | null | undefined;
    "overwrite": boolean;
    "single_idx"?: number | null | undefined;
    "start_idx"?: number | null | undefined;
    "stop_idx"?: number | null | undefined;
    "expr": string;
    "prefix"?: string | null | undefined;
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
        "3dcalc": v_3dcalc_cargs,
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
        "3dcalc": v_3dcalc_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dcalc(...)`.
 *
 * @interface
 */
interface V3dcalcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file name.
     */
    out_file: OutputPathType | null;
}


function v_3dcalc_params(
    in_file_a: InputPathType,
    expr: string,
    in_file_b: InputPathType | null = null,
    in_file_c: InputPathType | null = null,
    other: InputPathType | null = null,
    overwrite: boolean = false,
    single_idx: number | null = null,
    start_idx: number | null = null,
    stop_idx: number | null = null,
    prefix: string | null = null,
): V3dcalcParameters {
    /**
     * Build parameters.
    
     * @param in_file_a Input file to 3dcalc.
     * @param expr Expr.
     * @param in_file_b Operand file to 3dcalc.
     * @param in_file_c Operand file to 3dcalc.
     * @param other Other options.
     * @param overwrite Overwrite output.
     * @param single_idx Volume index for in_file_a.
     * @param start_idx Start index for in_file_a.
     * @param stop_idx Stop index for in_file_a.
     * @param prefix Output image file name.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dcalc" as const,
        "in_file_a": in_file_a,
        "overwrite": overwrite,
        "expr": expr,
    };
    if (in_file_b !== null) {
        params["in_file_b"] = in_file_b;
    }
    if (in_file_c !== null) {
        params["in_file_c"] = in_file_c;
    }
    if (other !== null) {
        params["other"] = other;
    }
    if (single_idx !== null) {
        params["single_idx"] = single_idx;
    }
    if (start_idx !== null) {
        params["start_idx"] = start_idx;
    }
    if (stop_idx !== null) {
        params["stop_idx"] = stop_idx;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v_3dcalc_cargs(
    params: V3dcalcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dcalc");
    cargs.push(
        "-a",
        execution.inputFile((params["in_file_a"] ?? null))
    );
    if ((params["in_file_b"] ?? null) !== null) {
        cargs.push(
            "-b",
            execution.inputFile((params["in_file_b"] ?? null))
        );
    }
    if ((params["in_file_c"] ?? null) !== null) {
        cargs.push(
            "-c",
            execution.inputFile((params["in_file_c"] ?? null))
        );
    }
    if ((params["other"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["other"] ?? null)));
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["single_idx"] ?? null) !== null) {
        cargs.push(String((params["single_idx"] ?? null)));
    }
    if ((params["start_idx"] ?? null) !== null) {
        cargs.push(String((params["start_idx"] ?? null)));
    }
    if ((params["stop_idx"] ?? null) !== null) {
        cargs.push(String((params["stop_idx"] ?? null)));
    }
    cargs.push(
        "-expr",
        (params["expr"] ?? null)
    );
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    return cargs;
}


function v_3dcalc_outputs(
    params: V3dcalcParameters,
    execution: Execution,
): V3dcalcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dcalcOutputs = {
        root: execution.outputFile("."),
        out_file: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_3dcalc_execute(
    params: V3dcalcParameters,
    execution: Execution,
): V3dcalcOutputs {
    /**
     * AFNI's calculator program.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dcalcOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dcalc_cargs(params, execution)
    const ret = v_3dcalc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dcalc(
    in_file_a: InputPathType,
    expr: string,
    in_file_b: InputPathType | null = null,
    in_file_c: InputPathType | null = null,
    other: InputPathType | null = null,
    overwrite: boolean = false,
    single_idx: number | null = null,
    start_idx: number | null = null,
    stop_idx: number | null = null,
    prefix: string | null = null,
    runner: Runner | null = null,
): V3dcalcOutputs {
    /**
     * AFNI's calculator program.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_file_a Input file to 3dcalc.
     * @param expr Expr.
     * @param in_file_b Operand file to 3dcalc.
     * @param in_file_c Operand file to 3dcalc.
     * @param other Other options.
     * @param overwrite Overwrite output.
     * @param single_idx Volume index for in_file_a.
     * @param start_idx Start index for in_file_a.
     * @param stop_idx Stop index for in_file_a.
     * @param prefix Output image file name.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dcalcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DCALC_METADATA);
    const params = v_3dcalc_params(in_file_a, expr, in_file_b, in_file_c, other, overwrite, single_idx, start_idx, stop_idx, prefix)
    return v_3dcalc_execute(params, execution);
}


export {
      V3dcalcOutputs,
      V3dcalcParameters,
      V_3DCALC_METADATA,
      v_3dcalc,
      v_3dcalc_params,
};
