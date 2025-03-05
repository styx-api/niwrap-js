// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_SEGREG_METADATA: Metadata = {
    id: "f2669e04710c9f1f9d1fd46259ec2d013c37daf3.boutiques",
    name: "mri_segreg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriSegregParameters {
    "__STYXTYPE__": "mri_segreg";
    "input_file": InputPathType;
    "output_file": string;
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
        "mri_segreg": mri_segreg_cargs,
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
        "mri_segreg": mri_segreg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_segreg(...)`.
 *
 * @interface
 */
interface MriSegregOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file generated by mri_segreg
     */
    outfile: OutputPathType;
}


function mri_segreg_params(
    input_file: InputPathType,
    output_file: string = "output.mgz",
): MriSegregParameters {
    /**
     * Build parameters.
    
     * @param input_file Input image file. All formats accepted by mri_convert can be used.
     * @param output_file Output file for the processed image
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_segreg" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    return params;
}


function mri_segreg_cargs(
    params: MriSegregParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_segreg");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function mri_segreg_outputs(
    params: MriSegregParameters,
    execution: Execution,
): MriSegregOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriSegregOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_segreg_execute(
    params: MriSegregParameters,
    execution: Execution,
): MriSegregOutputs {
    /**
     * MRI Segregation tool.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriSegregOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_segreg_cargs(params, execution)
    const ret = mri_segreg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_segreg(
    input_file: InputPathType,
    output_file: string = "output.mgz",
    runner: Runner | null = null,
): MriSegregOutputs {
    /**
     * MRI Segregation tool.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input image file. All formats accepted by mri_convert can be used.
     * @param output_file Output file for the processed image
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriSegregOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_SEGREG_METADATA);
    const params = mri_segreg_params(input_file, output_file)
    return mri_segreg_execute(params, execution);
}


export {
      MRI_SEGREG_METADATA,
      MriSegregOutputs,
      MriSegregParameters,
      mri_segreg,
      mri_segreg_params,
};
