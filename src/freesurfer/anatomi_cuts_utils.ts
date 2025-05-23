// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANATOMI_CUTS_UTILS_METADATA: Metadata = {
    id: "5b8fc2fbd044825ca8524543fcf4b4b3d56cb1f7.boutiques",
    name: "anatomiCutsUtils",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface AnatomiCutsUtilsParameters {
    "__STYXTYPE__": "anatomiCutsUtils";
    "modules"?: Array<string> | null | undefined;
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
        "anatomiCutsUtils": anatomi_cuts_utils_cargs,
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
 * Output object returned when calling `anatomi_cuts_utils(...)`.
 *
 * @interface
 */
interface AnatomiCutsUtilsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function anatomi_cuts_utils_params(
    modules: Array<string> | null = null,
): AnatomiCutsUtilsParameters {
    /**
     * Build parameters.
    
     * @param modules Specify the modules to import for processing. Ensure necessary modules like 'graph_tools' are installed.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "anatomiCutsUtils" as const,
    };
    if (modules !== null) {
        params["modules"] = modules;
    }
    return params;
}


function anatomi_cuts_utils_cargs(
    params: AnatomiCutsUtilsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("anatomiCutsUtils");
    if ((params["modules"] ?? null) !== null) {
        cargs.push(...(params["modules"] ?? null));
    }
    return cargs;
}


function anatomi_cuts_utils_outputs(
    params: AnatomiCutsUtilsParameters,
    execution: Execution,
): AnatomiCutsUtilsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AnatomiCutsUtilsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function anatomi_cuts_utils_execute(
    params: AnatomiCutsUtilsParameters,
    execution: Execution,
): AnatomiCutsUtilsOutputs {
    /**
     * A tool for anatomical segmentation using graph-based methods.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AnatomiCutsUtilsOutputs`).
     */
    params = execution.params(params)
    const cargs = anatomi_cuts_utils_cargs(params, execution)
    const ret = anatomi_cuts_utils_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function anatomi_cuts_utils(
    modules: Array<string> | null = null,
    runner: Runner | null = null,
): AnatomiCutsUtilsOutputs {
    /**
     * A tool for anatomical segmentation using graph-based methods.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param modules Specify the modules to import for processing. Ensure necessary modules like 'graph_tools' are installed.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AnatomiCutsUtilsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANATOMI_CUTS_UTILS_METADATA);
    const params = anatomi_cuts_utils_params(modules)
    return anatomi_cuts_utils_execute(params, execution);
}


export {
      ANATOMI_CUTS_UTILS_METADATA,
      AnatomiCutsUtilsOutputs,
      AnatomiCutsUtilsParameters,
      anatomi_cuts_utils,
      anatomi_cuts_utils_params,
};
