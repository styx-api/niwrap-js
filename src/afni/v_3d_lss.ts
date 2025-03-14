// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_LSS_METADATA: Metadata = {
    id: "d793e92300ed18c69c7d31223293711fdbbfaaf7.boutiques",
    name: "3dLSS",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dLssParameters {
    "__STYXTYPE__": "3dLSS";
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
        "3dLSS": v_3d_lss_cargs,
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
        "3dLSS": v_3d_lss_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_lss(...)`.
 *
 * @interface
 */
interface V3dLssOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset containing the LSS estimates of the beta weights for the '-stim_times_IM' stimuli.
     */
    output_dataset: OutputPathType;
    /**
     * Estimator vectors saved in a 1D formatted file.
     */
    save1_d_output: OutputPathType;
}


function v_3d_lss_params(
): V3dLssParameters {
    /**
     * Build parameters.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dLSS" as const,
    };
    return params;
}


function v_3d_lss_cargs(
    params: V3dLssParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dLSS");
    cargs.push("[OPTIONS]");
    return cargs;
}


function v_3d_lss_outputs(
    params: V3dLssParameters,
    execution: Execution,
): V3dLssOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dLssOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile(["LSSout+orig.HEAD"].join('')),
        save1_d_output: execution.outputFile(["[SAVE1D]"].join('')),
    };
    return ret;
}


function v_3d_lss_execute(
    params: V3dLssParameters,
    execution: Execution,
): V3dLssOutputs {
    /**
     * Least-Squares-Sum (LSS) estimation tool from a -stim_times_IM matrix for multivoxel pattern classification analyses.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dLssOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_lss_cargs(params, execution)
    const ret = v_3d_lss_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_lss(
    runner: Runner | null = null,
): V3dLssOutputs {
    /**
     * Least-Squares-Sum (LSS) estimation tool from a -stim_times_IM matrix for multivoxel pattern classification analyses.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dLssOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_LSS_METADATA);
    const params = v_3d_lss_params()
    return v_3d_lss_execute(params, execution);
}


export {
      V3dLssOutputs,
      V3dLssParameters,
      V_3D_LSS_METADATA,
      v_3d_lss,
      v_3d_lss_params,
};
