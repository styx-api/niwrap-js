// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1D_ASTRIP_METADATA: Metadata = {
    id: "2aea6d9a25067a9ea93b108537a720deaa6d64fe.boutiques",
    name: "1dAstrip",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dAstripParameters {
    "__STYXTYPE__": "1dAstrip";
    "infile": InputPathType;
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
        "1dAstrip": v_1d_astrip_cargs,
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
        "1dAstrip": v_1d_astrip_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1d_astrip(...)`.
 *
 * @interface
 */
interface V1dAstripOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file with only numeric characters.
     */
    outfile: OutputPathType;
}


function v_1d_astrip_params(
    infile: InputPathType,
): V1dAstripParameters {
    /**
     * Build parameters.
    
     * @param infile Input file from which non-numeric characters will be stripped.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dAstrip" as const,
        "infile": infile,
    };
    return params;
}


function v_1d_astrip_cargs(
    params: V1dAstripParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dAstrip");
    cargs.push(["< ", execution.inputFile((params["infile"] ?? null))].join(''));
    return cargs;
}


function v_1d_astrip_outputs(
    params: V1dAstripParameters,
    execution: Execution,
): V1dAstripOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dAstripOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile(["[OUTPUT_FILE]"].join('')),
    };
    return ret;
}


function v_1d_astrip_execute(
    params: V1dAstripParameters,
    execution: Execution,
): V1dAstripOutputs {
    /**
     * Strips non-numeric characters from a file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dAstripOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1d_astrip_cargs(params, execution)
    const ret = v_1d_astrip_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1d_astrip(
    infile: InputPathType,
    runner: Runner | null = null,
): V1dAstripOutputs {
    /**
     * Strips non-numeric characters from a file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input file from which non-numeric characters will be stripped.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dAstripOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1D_ASTRIP_METADATA);
    const params = v_1d_astrip_params(infile)
    return v_1d_astrip_execute(params, execution);
}


export {
      V1dAstripOutputs,
      V1dAstripParameters,
      V_1D_ASTRIP_METADATA,
      v_1d_astrip,
      v_1d_astrip_params,
};
