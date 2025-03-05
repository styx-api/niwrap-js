// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BACKEND_AVERAGE_ROI_CORRELATION_METADATA: Metadata = {
    id: "92d29c21c9c3c279b64b735c2a3ea9a41a57d6cd.boutiques",
    name: "backend-average-roi-correlation",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface BackendAverageRoiCorrelationParameters {
    "__STYXTYPE__": "backend-average-roi-correlation";
    "index_list": string;
    "out_file": string;
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
        "backend-average-roi-correlation": backend_average_roi_correlation_cargs,
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
 * Output object returned when calling `backend_average_roi_correlation(...)`.
 *
 * @interface
 */
interface BackendAverageRoiCorrelationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function backend_average_roi_correlation_params(
    index_list: string,
    out_file: string,
): BackendAverageRoiCorrelationParameters {
    /**
     * Build parameters.
    
     * @param index_list comma separated list of cifti indexes to average and then correlate
     * @param out_file file to write the average row to
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "backend-average-roi-correlation" as const,
        "index_list": index_list,
        "out_file": out_file,
    };
    return params;
}


function backend_average_roi_correlation_cargs(
    params: BackendAverageRoiCorrelationParameters,
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
    cargs.push("-backend-average-roi-correlation");
    cargs.push((params["index_list"] ?? null));
    cargs.push((params["out_file"] ?? null));
    return cargs;
}


function backend_average_roi_correlation_outputs(
    params: BackendAverageRoiCorrelationParameters,
    execution: Execution,
): BackendAverageRoiCorrelationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BackendAverageRoiCorrelationOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function backend_average_roi_correlation_execute(
    params: BackendAverageRoiCorrelationParameters,
    execution: Execution,
): BackendAverageRoiCorrelationOutputs {
    /**
     * Connectome db backend command for cifti average roi correlation.
     * 
     * This command is probably not the one you are looking for, try -cifti-average-roi-correlation.  It takes the list of cifti files to average from standard input, and writes its output as little endian, 32-bit integer of row size followed by the row as 32-bit floats.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BackendAverageRoiCorrelationOutputs`).
     */
    params = execution.params(params)
    const cargs = backend_average_roi_correlation_cargs(params, execution)
    const ret = backend_average_roi_correlation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function backend_average_roi_correlation(
    index_list: string,
    out_file: string,
    runner: Runner | null = null,
): BackendAverageRoiCorrelationOutputs {
    /**
     * Connectome db backend command for cifti average roi correlation.
     * 
     * This command is probably not the one you are looking for, try -cifti-average-roi-correlation.  It takes the list of cifti files to average from standard input, and writes its output as little endian, 32-bit integer of row size followed by the row as 32-bit floats.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param index_list comma separated list of cifti indexes to average and then correlate
     * @param out_file file to write the average row to
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BackendAverageRoiCorrelationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BACKEND_AVERAGE_ROI_CORRELATION_METADATA);
    const params = backend_average_roi_correlation_params(index_list, out_file)
    return backend_average_roi_correlation_execute(params, execution);
}


export {
      BACKEND_AVERAGE_ROI_CORRELATION_METADATA,
      BackendAverageRoiCorrelationOutputs,
      BackendAverageRoiCorrelationParameters,
      backend_average_roi_correlation,
      backend_average_roi_correlation_params,
};
