// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_HIRES_REGISTER_METADATA: Metadata = {
    id: "d0f8f80d941959eeea65f354e59a64867fc3ca33.boutiques",
    name: "mri_hires_register",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriHiresRegisterParameters {
    "__STYXTYPE__": "mri_hires_register";
    "hires_labeling": InputPathType;
    "input_intensity": InputPathType;
    "input_aseg": InputPathType;
    "output_xform": string;
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
        "mri_hires_register": mri_hires_register_cargs,
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
        "mri_hires_register": mri_hires_register_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_hires_register(...)`.
 *
 * @interface
 */
interface MriHiresRegisterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output transform file resulting from high-resolution registration
     */
    output_file: OutputPathType;
}


function mri_hires_register_params(
    hires_labeling: InputPathType,
    input_intensity: InputPathType,
    input_aseg: InputPathType,
    output_xform: string,
): MriHiresRegisterParameters {
    /**
     * Build parameters.
    
     * @param hires_labeling The high resolution labeling input file
     * @param input_intensity The input intensity file
     * @param input_aseg The input aseg file
     * @param output_xform The output transform file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_hires_register" as const,
        "hires_labeling": hires_labeling,
        "input_intensity": input_intensity,
        "input_aseg": input_aseg,
        "output_xform": output_xform,
    };
    return params;
}


function mri_hires_register_cargs(
    params: MriHiresRegisterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_hires_register");
    cargs.push(execution.inputFile((params["hires_labeling"] ?? null)));
    cargs.push(execution.inputFile((params["input_intensity"] ?? null)));
    cargs.push(execution.inputFile((params["input_aseg"] ?? null)));
    cargs.push((params["output_xform"] ?? null));
    return cargs;
}


function mri_hires_register_outputs(
    params: MriHiresRegisterParameters,
    execution: Execution,
): MriHiresRegisterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriHiresRegisterOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_xform"] ?? null)].join('')),
    };
    return ret;
}


function mri_hires_register_execute(
    params: MriHiresRegisterParameters,
    execution: Execution,
): MriHiresRegisterOutputs {
    /**
     * A tool for high-resolution registration for Freesurfer images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriHiresRegisterOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_hires_register_cargs(params, execution)
    const ret = mri_hires_register_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_hires_register(
    hires_labeling: InputPathType,
    input_intensity: InputPathType,
    input_aseg: InputPathType,
    output_xform: string,
    runner: Runner | null = null,
): MriHiresRegisterOutputs {
    /**
     * A tool for high-resolution registration for Freesurfer images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hires_labeling The high resolution labeling input file
     * @param input_intensity The input intensity file
     * @param input_aseg The input aseg file
     * @param output_xform The output transform file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriHiresRegisterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_HIRES_REGISTER_METADATA);
    const params = mri_hires_register_params(hires_labeling, input_intensity, input_aseg, output_xform)
    return mri_hires_register_execute(params, execution);
}


export {
      MRI_HIRES_REGISTER_METADATA,
      MriHiresRegisterOutputs,
      MriHiresRegisterParameters,
      mri_hires_register,
      mri_hires_register_params,
};
