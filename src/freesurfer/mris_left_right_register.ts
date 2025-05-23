// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_LEFT_RIGHT_REGISTER_METADATA: Metadata = {
    id: "e63f9c437139fff9b770440c97fbe2c2f184e3d5.boutiques",
    name: "mris_left_right_register",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisLeftRightRegisterParameters {
    "__STYXTYPE__": "mris_left_right_register";
    "lh_sphere": InputPathType;
    "rh_sphere": InputPathType;
    "lh_sphere_left_right": string;
    "rh_sphere_left_right": string;
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
        "mris_left_right_register": mris_left_right_register_cargs,
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
        "mris_left_right_register": mris_left_right_register_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_left_right_register(...)`.
 *
 * @interface
 */
interface MrisLeftRightRegisterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Registered left hemisphere spherical surface output file
     */
    out_lh_sphere_left_right: OutputPathType;
    /**
     * Registered right hemisphere spherical surface output file
     */
    out_rh_sphere_left_right: OutputPathType;
}


function mris_left_right_register_params(
    lh_sphere: InputPathType,
    rh_sphere: InputPathType,
    lh_sphere_left_right: string,
    rh_sphere_left_right: string,
): MrisLeftRightRegisterParameters {
    /**
     * Build parameters.
    
     * @param lh_sphere Left hemisphere spherical surface input file
     * @param rh_sphere Right hemisphere spherical surface input file
     * @param lh_sphere_left_right Output file for left hemisphere with left-right registration
     * @param rh_sphere_left_right Output file for right hemisphere with left-right registration
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_left_right_register" as const,
        "lh_sphere": lh_sphere,
        "rh_sphere": rh_sphere,
        "lh_sphere_left_right": lh_sphere_left_right,
        "rh_sphere_left_right": rh_sphere_left_right,
    };
    return params;
}


function mris_left_right_register_cargs(
    params: MrisLeftRightRegisterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_left_right_register");
    cargs.push(execution.inputFile((params["lh_sphere"] ?? null)));
    cargs.push(execution.inputFile((params["rh_sphere"] ?? null)));
    cargs.push((params["lh_sphere_left_right"] ?? null));
    cargs.push((params["rh_sphere_left_right"] ?? null));
    return cargs;
}


function mris_left_right_register_outputs(
    params: MrisLeftRightRegisterParameters,
    execution: Execution,
): MrisLeftRightRegisterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisLeftRightRegisterOutputs = {
        root: execution.outputFile("."),
        out_lh_sphere_left_right: execution.outputFile([(params["lh_sphere_left_right"] ?? null)].join('')),
        out_rh_sphere_left_right: execution.outputFile([(params["rh_sphere_left_right"] ?? null)].join('')),
    };
    return ret;
}


function mris_left_right_register_execute(
    params: MrisLeftRightRegisterParameters,
    execution: Execution,
): MrisLeftRightRegisterOutputs {
    /**
     * Register left and right hemisphere spherical surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisLeftRightRegisterOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_left_right_register_cargs(params, execution)
    const ret = mris_left_right_register_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_left_right_register(
    lh_sphere: InputPathType,
    rh_sphere: InputPathType,
    lh_sphere_left_right: string,
    rh_sphere_left_right: string,
    runner: Runner | null = null,
): MrisLeftRightRegisterOutputs {
    /**
     * Register left and right hemisphere spherical surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param lh_sphere Left hemisphere spherical surface input file
     * @param rh_sphere Right hemisphere spherical surface input file
     * @param lh_sphere_left_right Output file for left hemisphere with left-right registration
     * @param rh_sphere_left_right Output file for right hemisphere with left-right registration
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisLeftRightRegisterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_LEFT_RIGHT_REGISTER_METADATA);
    const params = mris_left_right_register_params(lh_sphere, rh_sphere, lh_sphere_left_right, rh_sphere_left_right)
    return mris_left_right_register_execute(params, execution);
}


export {
      MRIS_LEFT_RIGHT_REGISTER_METADATA,
      MrisLeftRightRegisterOutputs,
      MrisLeftRightRegisterParameters,
      mris_left_right_register,
      mris_left_right_register_params,
};
