// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HISTO_COMPUTE_JOINT_DENSITY_METADATA: Metadata = {
    id: "3a36a770d00bbd1f28b86ef82a2c5b6f1aaee144.boutiques",
    name: "histo_compute_joint_density",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface HistoComputeJointDensityParameters {
    "__STYXTYPE__": "histo_compute_joint_density";
    "volume1": InputPathType;
    "volume2": InputPathType;
    "joint_density_file": string;
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
        "histo_compute_joint_density": histo_compute_joint_density_cargs,
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
        "histo_compute_joint_density": histo_compute_joint_density_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `histo_compute_joint_density(...)`.
 *
 * @interface
 */
interface HistoComputeJointDensityOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Computed joint density output file
     */
    output_joint_density: OutputPathType;
}


function histo_compute_joint_density_params(
    volume1: InputPathType,
    volume2: InputPathType,
    joint_density_file: string,
): HistoComputeJointDensityParameters {
    /**
     * Build parameters.
    
     * @param volume1 Input volume 1
     * @param volume2 Input volume 2
     * @param joint_density_file Output joint density file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "histo_compute_joint_density" as const,
        "volume1": volume1,
        "volume2": volume2,
        "joint_density_file": joint_density_file,
    };
    return params;
}


function histo_compute_joint_density_cargs(
    params: HistoComputeJointDensityParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("histo_compute_joint_density");
    cargs.push(execution.inputFile((params["volume1"] ?? null)));
    cargs.push(execution.inputFile((params["volume2"] ?? null)));
    cargs.push((params["joint_density_file"] ?? null));
    return cargs;
}


function histo_compute_joint_density_outputs(
    params: HistoComputeJointDensityParameters,
    execution: Execution,
): HistoComputeJointDensityOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HistoComputeJointDensityOutputs = {
        root: execution.outputFile("."),
        output_joint_density: execution.outputFile([(params["joint_density_file"] ?? null)].join('')),
    };
    return ret;
}


function histo_compute_joint_density_execute(
    params: HistoComputeJointDensityParameters,
    execution: Execution,
): HistoComputeJointDensityOutputs {
    /**
     * A tool to compute the joint density of two volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HistoComputeJointDensityOutputs`).
     */
    params = execution.params(params)
    const cargs = histo_compute_joint_density_cargs(params, execution)
    const ret = histo_compute_joint_density_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function histo_compute_joint_density(
    volume1: InputPathType,
    volume2: InputPathType,
    joint_density_file: string,
    runner: Runner | null = null,
): HistoComputeJointDensityOutputs {
    /**
     * A tool to compute the joint density of two volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param volume1 Input volume 1
     * @param volume2 Input volume 2
     * @param joint_density_file Output joint density file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HistoComputeJointDensityOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HISTO_COMPUTE_JOINT_DENSITY_METADATA);
    const params = histo_compute_joint_density_params(volume1, volume2, joint_density_file)
    return histo_compute_joint_density_execute(params, execution);
}


export {
      HISTO_COMPUTE_JOINT_DENSITY_METADATA,
      HistoComputeJointDensityOutputs,
      HistoComputeJointDensityParameters,
      histo_compute_joint_density,
      histo_compute_joint_density_params,
};
