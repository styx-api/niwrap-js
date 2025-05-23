// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MINC2SEQINFO_METADATA: Metadata = {
    id: "d57928aac7b425a7a859150e95ea57280a4d9604.boutiques",
    name: "minc2seqinfo",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Minc2seqinfoParameters {
    "__STYXTYPE__": "minc2seqinfo";
    "mincfile": InputPathType;
    "seqinfofile": string;
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
        "minc2seqinfo": minc2seqinfo_cargs,
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
        "minc2seqinfo": minc2seqinfo_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `minc2seqinfo(...)`.
 *
 * @interface
 */
interface Minc2seqinfoOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the extracted sequence information.
     */
    out_seqinfofile: OutputPathType;
}


function minc2seqinfo_params(
    mincfile: InputPathType,
    seqinfofile: string,
): Minc2seqinfoParameters {
    /**
     * Build parameters.
    
     * @param mincfile Input MINC file from which to extract sequence information.
     * @param seqinfofile Output file where the sequence information will be stored.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "minc2seqinfo" as const,
        "mincfile": mincfile,
        "seqinfofile": seqinfofile,
    };
    return params;
}


function minc2seqinfo_cargs(
    params: Minc2seqinfoParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("minc2seqinfo");
    cargs.push(execution.inputFile((params["mincfile"] ?? null)));
    cargs.push((params["seqinfofile"] ?? null));
    return cargs;
}


function minc2seqinfo_outputs(
    params: Minc2seqinfoParameters,
    execution: Execution,
): Minc2seqinfoOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Minc2seqinfoOutputs = {
        root: execution.outputFile("."),
        out_seqinfofile: execution.outputFile([(params["seqinfofile"] ?? null)].join('')),
    };
    return ret;
}


function minc2seqinfo_execute(
    params: Minc2seqinfoParameters,
    execution: Execution,
): Minc2seqinfoOutputs {
    /**
     * Tool for extracting sequence information from MINC files.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Minc2seqinfoOutputs`).
     */
    params = execution.params(params)
    const cargs = minc2seqinfo_cargs(params, execution)
    const ret = minc2seqinfo_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function minc2seqinfo(
    mincfile: InputPathType,
    seqinfofile: string,
    runner: Runner | null = null,
): Minc2seqinfoOutputs {
    /**
     * Tool for extracting sequence information from MINC files.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param mincfile Input MINC file from which to extract sequence information.
     * @param seqinfofile Output file where the sequence information will be stored.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Minc2seqinfoOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MINC2SEQINFO_METADATA);
    const params = minc2seqinfo_params(mincfile, seqinfofile)
    return minc2seqinfo_execute(params, execution);
}


export {
      MINC2SEQINFO_METADATA,
      Minc2seqinfoOutputs,
      Minc2seqinfoParameters,
      minc2seqinfo,
      minc2seqinfo_params,
};
