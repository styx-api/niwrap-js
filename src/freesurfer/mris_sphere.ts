// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SPHERE_METADATA: Metadata = {
    id: "ff70a8889110348344f49593918baf25bab92371.boutiques",
    name: "mris_sphere",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisSphereParameters {
    "__STYXTYPE__": "mris_sphere";
    "surface_file": InputPathType;
    "patch_file": InputPathType;
    "output_patch": string;
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
        "mris_sphere": mris_sphere_cargs,
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
        "mris_sphere": mris_sphere_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_sphere(...)`.
 *
 * @interface
 */
interface MrisSphereOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output patch file.
     */
    output_patch_file: OutputPathType;
}


function mris_sphere_params(
    surface_file: InputPathType,
    patch_file: InputPathType,
    output_patch: string,
): MrisSphereParameters {
    /**
     * Build parameters.
    
     * @param surface_file Input surface file.
     * @param patch_file Input patch file name.
     * @param output_patch Output patch file name.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_sphere" as const,
        "surface_file": surface_file,
        "patch_file": patch_file,
        "output_patch": output_patch,
    };
    return params;
}


function mris_sphere_cargs(
    params: MrisSphereParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_sphere");
    cargs.push(execution.inputFile((params["surface_file"] ?? null)));
    cargs.push(execution.inputFile((params["patch_file"] ?? null)));
    cargs.push((params["output_patch"] ?? null));
    return cargs;
}


function mris_sphere_outputs(
    params: MrisSphereParameters,
    execution: Execution,
): MrisSphereOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisSphereOutputs = {
        root: execution.outputFile("."),
        output_patch_file: execution.outputFile([(params["output_patch"] ?? null)].join('')),
    };
    return ret;
}


function mris_sphere_execute(
    params: MrisSphereParameters,
    execution: Execution,
): MrisSphereOutputs {
    /**
     * This program will add a template into an average surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisSphereOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_sphere_cargs(params, execution)
    const ret = mris_sphere_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_sphere(
    surface_file: InputPathType,
    patch_file: InputPathType,
    output_patch: string,
    runner: Runner | null = null,
): MrisSphereOutputs {
    /**
     * This program will add a template into an average surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface_file Input surface file.
     * @param patch_file Input patch file name.
     * @param output_patch Output patch file name.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisSphereOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SPHERE_METADATA);
    const params = mris_sphere_params(surface_file, patch_file, output_patch)
    return mris_sphere_execute(params, execution);
}


export {
      MRIS_SPHERE_METADATA,
      MrisSphereOutputs,
      MrisSphereParameters,
      mris_sphere,
      mris_sphere_params,
};
