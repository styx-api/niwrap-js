// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_CA_DEFORM_METADATA: Metadata = {
    id: "7a76a6060e94710386328206ab18f500335fc348.boutiques",
    name: "mris_ca_deform",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisCaDeformParameters {
    "__STYXTYPE__": "mris_ca_deform";
    "input_surface": InputPathType;
    "label_vol": InputPathType;
    "transform": InputPathType;
    "intensity_vol": InputPathType;
    "output_surface": string;
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
        "mris_ca_deform": mris_ca_deform_cargs,
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
        "mris_ca_deform": mris_ca_deform_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_ca_deform(...)`.
 *
 * @interface
 */
interface MrisCaDeformOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The result of the deformation process, output surface file.
     */
    deformed_surface: OutputPathType;
}


function mris_ca_deform_params(
    input_surface: InputPathType,
    label_vol: InputPathType,
    transform: InputPathType,
    intensity_vol: InputPathType,
    output_surface: string,
): MrisCaDeformParameters {
    /**
     * Build parameters.
    
     * @param input_surface The input surface file to be deformed.
     * @param label_vol The input volumetric label map.
     * @param transform The transform file, typically a matrix that aligns the volumes.
     * @param intensity_vol The intensity volume that is used in the deformation process.
     * @param output_surface The file name for the output, deformed surface.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_ca_deform" as const,
        "input_surface": input_surface,
        "label_vol": label_vol,
        "transform": transform,
        "intensity_vol": intensity_vol,
        "output_surface": output_surface,
    };
    return params;
}


function mris_ca_deform_cargs(
    params: MrisCaDeformParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_ca_deform");
    cargs.push(execution.inputFile((params["input_surface"] ?? null)));
    cargs.push(execution.inputFile((params["label_vol"] ?? null)));
    cargs.push(execution.inputFile((params["transform"] ?? null)));
    cargs.push(execution.inputFile((params["intensity_vol"] ?? null)));
    cargs.push((params["output_surface"] ?? null));
    return cargs;
}


function mris_ca_deform_outputs(
    params: MrisCaDeformParameters,
    execution: Execution,
): MrisCaDeformOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisCaDeformOutputs = {
        root: execution.outputFile("."),
        deformed_surface: execution.outputFile([(params["output_surface"] ?? null)].join('')),
    };
    return ret;
}


function mris_ca_deform_execute(
    params: MrisCaDeformParameters,
    execution: Execution,
): MrisCaDeformOutputs {
    /**
     * Deforms a surface to match it to a volumetric map of cortical labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisCaDeformOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_ca_deform_cargs(params, execution)
    const ret = mris_ca_deform_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_ca_deform(
    input_surface: InputPathType,
    label_vol: InputPathType,
    transform: InputPathType,
    intensity_vol: InputPathType,
    output_surface: string,
    runner: Runner | null = null,
): MrisCaDeformOutputs {
    /**
     * Deforms a surface to match it to a volumetric map of cortical labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface The input surface file to be deformed.
     * @param label_vol The input volumetric label map.
     * @param transform The transform file, typically a matrix that aligns the volumes.
     * @param intensity_vol The intensity volume that is used in the deformation process.
     * @param output_surface The file name for the output, deformed surface.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisCaDeformOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_CA_DEFORM_METADATA);
    const params = mris_ca_deform_params(input_surface, label_vol, transform, intensity_vol, output_surface)
    return mris_ca_deform_execute(params, execution);
}


export {
      MRIS_CA_DEFORM_METADATA,
      MrisCaDeformOutputs,
      MrisCaDeformParameters,
      mris_ca_deform,
      mris_ca_deform_params,
};
