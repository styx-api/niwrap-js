// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIDUCIALS_CORRECTION_METADATA: Metadata = {
    id: "4c8ff34a05a460d57cf9bd6ab63606fa5145834f.boutiques",
    name: "fiducials_correction",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FiducialsCorrectionParameters {
    "__STYXTYPE__": "fiducials_correction";
    "input_file": InputPathType;
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
        "fiducials_correction": fiducials_correction_cargs,
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
        "fiducials_correction": fiducials_correction_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fiducials_correction(...)`.
 *
 * @interface
 */
interface FiducialsCorrectionOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file with corrected fiducial markers.
     */
    output_file: OutputPathType;
}


function fiducials_correction_params(
    input_file: InputPathType,
): FiducialsCorrectionParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file containing imaging data with fiducial markers to correct.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fiducials_correction" as const,
        "input_file": input_file,
    };
    return params;
}


function fiducials_correction_cargs(
    params: FiducialsCorrectionParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fiducials_correction");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push("[OUTPUT_FILE]");
    return cargs;
}


function fiducials_correction_outputs(
    params: FiducialsCorrectionParameters,
    execution: Execution,
): FiducialsCorrectionOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FiducialsCorrectionOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["[OUTPUT_FILE]"].join('')),
    };
    return ret;
}


function fiducials_correction_execute(
    params: FiducialsCorrectionParameters,
    execution: Execution,
): FiducialsCorrectionOutputs {
    /**
     * A tool for correcting fiducial markers in imaging data. Note: This command has dependency issues with the Qt platform plugin 'xcb'. Ensure dependencies are properly configured.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FiducialsCorrectionOutputs`).
     */
    params = execution.params(params)
    const cargs = fiducials_correction_cargs(params, execution)
    const ret = fiducials_correction_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fiducials_correction(
    input_file: InputPathType,
    runner: Runner | null = null,
): FiducialsCorrectionOutputs {
    /**
     * A tool for correcting fiducial markers in imaging data. Note: This command has dependency issues with the Qt platform plugin 'xcb'. Ensure dependencies are properly configured.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input file containing imaging data with fiducial markers to correct.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FiducialsCorrectionOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIDUCIALS_CORRECTION_METADATA);
    const params = fiducials_correction_params(input_file)
    return fiducials_correction_execute(params, execution);
}


export {
      FIDUCIALS_CORRECTION_METADATA,
      FiducialsCorrectionOutputs,
      FiducialsCorrectionParameters,
      fiducials_correction,
      fiducials_correction_params,
};
