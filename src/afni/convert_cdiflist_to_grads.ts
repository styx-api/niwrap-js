// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVERT_CDIFLIST_TO_GRADS_METADATA: Metadata = {
    id: "881be0d2d254f2047a6c704bea01fe398f0290f3.boutiques",
    name: "convert_cdiflist_to_grads",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ConvertCdiflistToGradsParameters {
    "__STYXTYPE__": "convert_cdiflist_to_grads";
    "cdiflist": InputPathType;
    "bval_max": number;
    "prefix": string;
    "ver": boolean;
    "date": boolean;
    "help": boolean;
    "hview": boolean;
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
        "convert_cdiflist_to_grads": convert_cdiflist_to_grads_cargs,
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
        "convert_cdiflist_to_grads": convert_cdiflist_to_grads_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `convert_cdiflist_to_grads(...)`.
 *
 * @interface
 */
interface ConvertCdiflistToGradsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Row-format of gradients (unit magnitude).
     */
    output_rvec: OutputPathType;
    /**
     * Row-format of bvals.
     */
    output_bval: OutputPathType;
    /**
     * Col-format of gradients (scaled by b-values).
     */
    output_cvec: OutputPathType;
}


function convert_cdiflist_to_grads_params(
    cdiflist: InputPathType,
    bval_max: number,
    prefix: string,
    ver: boolean = false,
    date: boolean = false,
    help: boolean = false,
    hview: boolean = false,
): ConvertCdiflistToGradsParameters {
    /**
     * Build parameters.
    
     * @param cdiflist Name(s) of cdiflist text file output by GE scanners when acquiring DWIs.
     * @param bval_max Max bvalue used, which provides a reference value for scaling everything else.
     * @param prefix Output basename for the subsequent grad and bvalue files (suffix and extensions will be added).
     * @param ver Display current version.
     * @param date Display release/editing date of current version.
     * @param help Display help in terminal.
     * @param hview Display help in terminal.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "convert_cdiflist_to_grads" as const,
        "cdiflist": cdiflist,
        "bval_max": bval_max,
        "prefix": prefix,
        "ver": ver,
        "date": date,
        "help": help,
        "hview": hview,
    };
    return params;
}


function convert_cdiflist_to_grads_cargs(
    params: ConvertCdiflistToGradsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("convert_cdiflist_to_grads.py");
    cargs.push(
        "-cdiflist",
        execution.inputFile((params["cdiflist"] ?? null))
    );
    cargs.push(
        "-bval_max",
        String((params["bval_max"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["ver"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["date"] ?? null)) {
        cargs.push("-date");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["hview"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function convert_cdiflist_to_grads_outputs(
    params: ConvertCdiflistToGradsParameters,
    execution: Execution,
): ConvertCdiflistToGradsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvertCdiflistToGradsOutputs = {
        root: execution.outputFile("."),
        output_rvec: execution.outputFile([(params["prefix"] ?? null), "_rvec.dat"].join('')),
        output_bval: execution.outputFile([(params["prefix"] ?? null), "_bval.dat"].join('')),
        output_cvec: execution.outputFile([(params["prefix"] ?? null), "_cvec.dat"].join('')),
    };
    return ret;
}


function convert_cdiflist_to_grads_execute(
    params: ConvertCdiflistToGradsParameters,
    execution: Execution,
): ConvertCdiflistToGradsOutputs {
    /**
     * This program reads in a GE cdiflist and outputs gradient file and file of bvalues for subsequent processing.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvertCdiflistToGradsOutputs`).
     */
    params = execution.params(params)
    const cargs = convert_cdiflist_to_grads_cargs(params, execution)
    const ret = convert_cdiflist_to_grads_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convert_cdiflist_to_grads(
    cdiflist: InputPathType,
    bval_max: number,
    prefix: string,
    ver: boolean = false,
    date: boolean = false,
    help: boolean = false,
    hview: boolean = false,
    runner: Runner | null = null,
): ConvertCdiflistToGradsOutputs {
    /**
     * This program reads in a GE cdiflist and outputs gradient file and file of bvalues for subsequent processing.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param cdiflist Name(s) of cdiflist text file output by GE scanners when acquiring DWIs.
     * @param bval_max Max bvalue used, which provides a reference value for scaling everything else.
     * @param prefix Output basename for the subsequent grad and bvalue files (suffix and extensions will be added).
     * @param ver Display current version.
     * @param date Display release/editing date of current version.
     * @param help Display help in terminal.
     * @param hview Display help in terminal.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvertCdiflistToGradsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVERT_CDIFLIST_TO_GRADS_METADATA);
    const params = convert_cdiflist_to_grads_params(cdiflist, bval_max, prefix, ver, date, help, hview)
    return convert_cdiflist_to_grads_execute(params, execution);
}


export {
      CONVERT_CDIFLIST_TO_GRADS_METADATA,
      ConvertCdiflistToGradsOutputs,
      ConvertCdiflistToGradsParameters,
      convert_cdiflist_to_grads,
      convert_cdiflist_to_grads_params,
};
