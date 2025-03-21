// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GET_AFNI_MODEL_PRF_6_BAD_METADATA: Metadata = {
    id: "f7614b8ced72773ab9bfd46ff569ff9a092b84e3.boutiques",
    name: "get_afni_model_PRF_6_BAD",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface GetAfniModelPrf6BadParameters {
    "__STYXTYPE__": "get_afni_model_PRF_6_BAD";
    "amplitude": number;
    "x_coord": number;
    "y_coord": number;
    "sigma": number;
    "sigrat": number;
    "theta": number;
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
        "get_afni_model_PRF_6_BAD": get_afni_model_prf_6_bad_cargs,
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
 * Output object returned when calling `get_afni_model_prf_6_bad(...)`.
 *
 * @interface
 */
interface GetAfniModelPrf6BadOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function get_afni_model_prf_6_bad_params(
    amplitude: number,
    x_coord: number,
    y_coord: number,
    sigma: number,
    sigrat: number,
    theta: number,
): GetAfniModelPrf6BadParameters {
    /**
     * Build parameters.
    
     * @param amplitude Amplitude parameter A
     * @param x_coord X coordinate parameter x
     * @param y_coord Y coordinate parameter y
     * @param sigma Sigma parameter sigma
     * @param sigrat Sigma ratio parameter sigrat
     * @param theta Theta parameter theta (in radians)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "get_afni_model_PRF_6_BAD" as const,
        "amplitude": amplitude,
        "x_coord": x_coord,
        "y_coord": y_coord,
        "sigma": sigma,
        "sigrat": sigrat,
        "theta": theta,
    };
    return params;
}


function get_afni_model_prf_6_bad_cargs(
    params: GetAfniModelPrf6BadParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("get_afni_model_PRF_6_BAD");
    cargs.push(String((params["amplitude"] ?? null)));
    cargs.push(String((params["x_coord"] ?? null)));
    cargs.push(String((params["y_coord"] ?? null)));
    cargs.push(String((params["sigma"] ?? null)));
    cargs.push(String((params["sigrat"] ?? null)));
    cargs.push(String((params["theta"] ?? null)));
    return cargs;
}


function get_afni_model_prf_6_bad_outputs(
    params: GetAfniModelPrf6BadParameters,
    execution: Execution,
): GetAfniModelPrf6BadOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GetAfniModelPrf6BadOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function get_afni_model_prf_6_bad_execute(
    params: GetAfniModelPrf6BadParameters,
    execution: Execution,
): GetAfniModelPrf6BadOutputs {
    /**
     * Command line tool for obtaining AFNI pRF model.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GetAfniModelPrf6BadOutputs`).
     */
    params = execution.params(params)
    const cargs = get_afni_model_prf_6_bad_cargs(params, execution)
    const ret = get_afni_model_prf_6_bad_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function get_afni_model_prf_6_bad(
    amplitude: number,
    x_coord: number,
    y_coord: number,
    sigma: number,
    sigrat: number,
    theta: number,
    runner: Runner | null = null,
): GetAfniModelPrf6BadOutputs {
    /**
     * Command line tool for obtaining AFNI pRF model.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param amplitude Amplitude parameter A
     * @param x_coord X coordinate parameter x
     * @param y_coord Y coordinate parameter y
     * @param sigma Sigma parameter sigma
     * @param sigrat Sigma ratio parameter sigrat
     * @param theta Theta parameter theta (in radians)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GetAfniModelPrf6BadOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GET_AFNI_MODEL_PRF_6_BAD_METADATA);
    const params = get_afni_model_prf_6_bad_params(amplitude, x_coord, y_coord, sigma, sigrat, theta)
    return get_afni_model_prf_6_bad_execute(params, execution);
}


export {
      GET_AFNI_MODEL_PRF_6_BAD_METADATA,
      GetAfniModelPrf6BadOutputs,
      GetAfniModelPrf6BadParameters,
      get_afni_model_prf_6_bad,
      get_afni_model_prf_6_bad_params,
};
