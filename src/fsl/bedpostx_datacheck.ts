// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BEDPOSTX_DATACHECK_METADATA: Metadata = {
    id: "eddcb6414c1d17da35164536bb565b595ac54640.boutiques",
    name: "bedpostx_datacheck",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface BedpostxDatacheckParameters {
    "__STYXTYPE__": "bedpostx_datacheck";
    "data_dir": string;
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
        "bedpostx_datacheck": bedpostx_datacheck_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `bedpostx_datacheck(...)`.
 *
 * @interface
 */
interface BedpostxDatacheckOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function bedpostx_datacheck_params(
    data_dir: string,
): BedpostxDatacheckParameters {
    /**
     * Build parameters.
    
     * @param data_dir Data directory to check for BEDPOSTX compatibility
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "bedpostx_datacheck" as const,
        "data_dir": data_dir,
    };
    return params;
}


function bedpostx_datacheck_cargs(
    params: BedpostxDatacheckParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("bedpostx_datacheck");
    cargs.push((params["data_dir"] ?? null));
    return cargs;
}


function bedpostx_datacheck_outputs(
    params: BedpostxDatacheckParameters,
    execution: Execution,
): BedpostxDatacheckOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BedpostxDatacheckOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function bedpostx_datacheck_execute(
    params: BedpostxDatacheckParameters,
    execution: Execution,
): BedpostxDatacheckOutputs {
    /**
     * Check the data directory for BEDPOSTX compatibility.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BedpostxDatacheckOutputs`).
     */
    params = execution.params(params)
    const cargs = bedpostx_datacheck_cargs(params, execution)
    const ret = bedpostx_datacheck_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function bedpostx_datacheck(
    data_dir: string,
    runner: Runner | null = null,
): BedpostxDatacheckOutputs {
    /**
     * Check the data directory for BEDPOSTX compatibility.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param data_dir Data directory to check for BEDPOSTX compatibility
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BedpostxDatacheckOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BEDPOSTX_DATACHECK_METADATA);
    const params = bedpostx_datacheck_params(data_dir)
    return bedpostx_datacheck_execute(params, execution);
}


export {
      BEDPOSTX_DATACHECK_METADATA,
      BedpostxDatacheckOutputs,
      BedpostxDatacheckParameters,
      bedpostx_datacheck,
      bedpostx_datacheck_params,
};
