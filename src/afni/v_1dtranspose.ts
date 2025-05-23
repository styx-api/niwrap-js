// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1DTRANSPOSE_METADATA: Metadata = {
    id: "d5a8a98288b5be2bc2aa9af67472ccf3e0d6d9a5.boutiques",
    name: "1dtranspose",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dtransposeParameters {
    "__STYXTYPE__": "1dtranspose";
    "infile": InputPathType;
    "outfile"?: string | null | undefined;
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
        "1dtranspose": v_1dtranspose_cargs,
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
        "1dtranspose": v_1dtranspose_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1dtranspose(...)`.
 *
 * @interface
 */
interface V1dtransposeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transposed output file
     */
    outfile: OutputPathType | null;
}


function v_1dtranspose_params(
    infile: InputPathType,
    outfile: string | null = null,
): V1dtransposeParameters {
    /**
     * Build parameters.
    
     * @param infile Input file (e.g. data.1D)
     * @param outfile Output file (e.g. transposed_data.1D), or '-' to write to stdout
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dtranspose" as const,
        "infile": infile,
    };
    if (outfile !== null) {
        params["outfile"] = outfile;
    }
    return params;
}


function v_1dtranspose_cargs(
    params: V1dtransposeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dtranspose");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    if ((params["outfile"] ?? null) !== null) {
        cargs.push((params["outfile"] ?? null));
    }
    return cargs;
}


function v_1dtranspose_outputs(
    params: V1dtransposeParameters,
    execution: Execution,
): V1dtransposeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dtransposeOutputs = {
        root: execution.outputFile("."),
        outfile: ((params["outfile"] ?? null) !== null) ? execution.outputFile([(params["outfile"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_1dtranspose_execute(
    params: V1dtransposeParameters,
    execution: Execution,
): V1dtransposeOutputs {
    /**
     * Transpose an AFNI *.1D file (ASCII list of numbers arranged in columns).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dtransposeOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1dtranspose_cargs(params, execution)
    const ret = v_1dtranspose_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1dtranspose(
    infile: InputPathType,
    outfile: string | null = null,
    runner: Runner | null = null,
): V1dtransposeOutputs {
    /**
     * Transpose an AFNI *.1D file (ASCII list of numbers arranged in columns).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input file (e.g. data.1D)
     * @param outfile Output file (e.g. transposed_data.1D), or '-' to write to stdout
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dtransposeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1DTRANSPOSE_METADATA);
    const params = v_1dtranspose_params(infile, outfile)
    return v_1dtranspose_execute(params, execution);
}


export {
      V1dtransposeOutputs,
      V1dtransposeParameters,
      V_1DTRANSPOSE_METADATA,
      v_1dtranspose,
      v_1dtranspose_params,
};
