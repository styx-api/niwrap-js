// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ZERO_LT_4DFP_METADATA: Metadata = {
    id: "fcce076168d12bf6fda2e6e5081ba9cecb493849.boutiques",
    name: "zero_lt_4dfp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ZeroLt4dfpParameters {
    "__STYXTYPE__": "zero_lt_4dfp";
    "flt_value": number;
    "file_4dfp": InputPathType;
    "outroot"?: string | null | undefined;
    "endianness"?: string | null | undefined;
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
        "zero_lt_4dfp": zero_lt_4dfp_cargs,
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
        "zero_lt_4dfp": zero_lt_4dfp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `zero_lt_4dfp(...)`.
 *
 * @interface
 */
interface ZeroLt4dfpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output 4dfp file with values less than the threshold zeroed.
     */
    output_4dfp: OutputPathType | null;
}


function zero_lt_4dfp_params(
    flt_value: number,
    file_4dfp: InputPathType,
    outroot: string | null = null,
    endianness: string | null = null,
): ZeroLt4dfpParameters {
    /**
     * Build parameters.
    
     * @param flt_value Floating point threshold value. Values less than this in the 4dfp file will be zeroed.
     * @param file_4dfp Input 4dfp file.
     * @param outroot Output root name for 4dfp file. If not specified, defaults to input file root with 'z' appended.
     * @param endianness Specify output endian format: 'b' for big endian or 'l' for little endian. Defaults to input endian.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "zero_lt_4dfp" as const,
        "flt_value": flt_value,
        "file_4dfp": file_4dfp,
    };
    if (outroot !== null) {
        params["outroot"] = outroot;
    }
    if (endianness !== null) {
        params["endianness"] = endianness;
    }
    return params;
}


function zero_lt_4dfp_cargs(
    params: ZeroLt4dfpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("zero_lt_4dfp");
    cargs.push(String((params["flt_value"] ?? null)));
    cargs.push(execution.inputFile((params["file_4dfp"] ?? null)));
    if ((params["outroot"] ?? null) !== null) {
        cargs.push((params["outroot"] ?? null));
    }
    if ((params["endianness"] ?? null) !== null) {
        cargs.push(
            "-@",
            (params["endianness"] ?? null)
        );
    }
    return cargs;
}


function zero_lt_4dfp_outputs(
    params: ZeroLt4dfpParameters,
    execution: Execution,
): ZeroLt4dfpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ZeroLt4dfpOutputs = {
        root: execution.outputFile("."),
        output_4dfp: ((params["outroot"] ?? null) !== null) ? execution.outputFile([(params["outroot"] ?? null), ".4dfp"].join('')) : null,
    };
    return ret;
}


function zero_lt_4dfp_execute(
    params: ZeroLt4dfpParameters,
    execution: Execution,
): ZeroLt4dfpOutputs {
    /**
     * A tool to process 4dfp image files by zeroing values less than a given float threshold.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ZeroLt4dfpOutputs`).
     */
    params = execution.params(params)
    const cargs = zero_lt_4dfp_cargs(params, execution)
    const ret = zero_lt_4dfp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function zero_lt_4dfp(
    flt_value: number,
    file_4dfp: InputPathType,
    outroot: string | null = null,
    endianness: string | null = null,
    runner: Runner | null = null,
): ZeroLt4dfpOutputs {
    /**
     * A tool to process 4dfp image files by zeroing values less than a given float threshold.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param flt_value Floating point threshold value. Values less than this in the 4dfp file will be zeroed.
     * @param file_4dfp Input 4dfp file.
     * @param outroot Output root name for 4dfp file. If not specified, defaults to input file root with 'z' appended.
     * @param endianness Specify output endian format: 'b' for big endian or 'l' for little endian. Defaults to input endian.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ZeroLt4dfpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ZERO_LT_4DFP_METADATA);
    const params = zero_lt_4dfp_params(flt_value, file_4dfp, outroot, endianness)
    return zero_lt_4dfp_execute(params, execution);
}


export {
      ZERO_LT_4DFP_METADATA,
      ZeroLt4dfpOutputs,
      ZeroLt4dfpParameters,
      zero_lt_4dfp,
      zero_lt_4dfp_params,
};
