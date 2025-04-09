// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__TO_MNI_QWARPAR_METADATA: Metadata = {
    id: "d56ea262996a4cde8c195ff538d38d88a827a2b1.boutiques",
    name: "@toMNI_Qwarpar",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VToMniQwarparParameters {
    "__STYXTYPE__": "@toMNI_Qwarpar";
    "numcpu": number;
    "numjob": number;
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
        "@toMNI_Qwarpar": v__to_mni_qwarpar_cargs,
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
        "@toMNI_Qwarpar": v__to_mni_qwarpar_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__to_mni_qwarpar(...)`.
 *
 * @interface
 */
interface VToMniQwarparOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset created after processing.
     */
    output_file: OutputPathType;
}


function v__to_mni_qwarpar_params(
    numcpu: number,
    numjob: number,
): VToMniQwarparParameters {
    /**
     * Build parameters.
    
     * @param numcpu TOTAL NUMBER OF CPUS TO USE; should not exceed the number of CPUs (cores) on the system.
     * @param numjob MAX NUMBER OF JOBS TO USE; often set to the same value as numcpu so that 1 dataset is processed in 1 core.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@toMNI_Qwarpar" as const,
        "numcpu": numcpu,
        "numjob": numjob,
    };
    return params;
}


function v__to_mni_qwarpar_cargs(
    params: VToMniQwarparParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@toMNI_Qwarpar");
    cargs.push(String((params["numcpu"] ?? null)));
    cargs.push(String((params["numjob"] ?? null)));
    return cargs;
}


function v__to_mni_qwarpar_outputs(
    params: VToMniQwarparParameters,
    execution: Execution,
): VToMniQwarparOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VToMniQwarparOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["*_uni+tlrc.HEAD"].join('')),
    };
    return ret;
}


function v__to_mni_qwarpar_execute(
    params: VToMniQwarparParameters,
    execution: Execution,
): VToMniQwarparOutputs {
    /**
     * Transforms datasets to MNI space, then collectively re-transforms them to produce a refined average.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VToMniQwarparOutputs`).
     */
    params = execution.params(params)
    const cargs = v__to_mni_qwarpar_cargs(params, execution)
    const ret = v__to_mni_qwarpar_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__to_mni_qwarpar(
    numcpu: number,
    numjob: number,
    runner: Runner | null = null,
): VToMniQwarparOutputs {
    /**
     * Transforms datasets to MNI space, then collectively re-transforms them to produce a refined average.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param numcpu TOTAL NUMBER OF CPUS TO USE; should not exceed the number of CPUs (cores) on the system.
     * @param numjob MAX NUMBER OF JOBS TO USE; often set to the same value as numcpu so that 1 dataset is processed in 1 core.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VToMniQwarparOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__TO_MNI_QWARPAR_METADATA);
    const params = v__to_mni_qwarpar_params(numcpu, numjob)
    return v__to_mni_qwarpar_execute(params, execution);
}


export {
      VToMniQwarparOutputs,
      VToMniQwarparParameters,
      V__TO_MNI_QWARPAR_METADATA,
      v__to_mni_qwarpar,
      v__to_mni_qwarpar_params,
};
