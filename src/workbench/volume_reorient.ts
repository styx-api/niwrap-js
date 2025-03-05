// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_REORIENT_METADATA: Metadata = {
    id: "64a53eb5b1219001c981ca04003ea946af095932.boutiques",
    name: "volume-reorient",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeReorientParameters {
    "__STYXTYPE__": "volume-reorient";
    "volume": InputPathType;
    "orient_string": string;
    "volume_out": string;
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
        "volume-reorient": volume_reorient_cargs,
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
 * Output object returned when calling `volume_reorient(...)`.
 *
 * @interface
 */
interface VolumeReorientOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function volume_reorient_params(
    volume: InputPathType,
    orient_string: string,
    volume_out: string,
): VolumeReorientParameters {
    /**
     * Build parameters.
    
     * @param volume the volume to reorient
     * @param orient_string the desired orientation
     * @param volume_out out - the reoriented volume
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-reorient" as const,
        "volume": volume,
        "orient_string": orient_string,
        "volume_out": volume_out,
    };
    return params;
}


function volume_reorient_cargs(
    params: VolumeReorientParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-volume-reorient");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    cargs.push((params["orient_string"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    return cargs;
}


function volume_reorient_outputs(
    params: VolumeReorientParameters,
    execution: Execution,
): VolumeReorientOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeReorientOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function volume_reorient_execute(
    params: VolumeReorientParameters,
    execution: Execution,
): VolumeReorientOutputs {
    /**
     * Change voxel order of a volume file.
     * 
     * Changes the voxel order and the header spacing/origin information such that the value of any spatial point is unchanged.  Orientation strings look like 'LPI', which means first index is left to right, second is posterior to anterior, and third is inferior to superior.  The valid characters are:
     * 
     * L      left to right
     * R      right to left
     * P      posterior to anterior
     * A      anterior to posterior
     * I      inferior to superior
     * S      superior to inferior.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeReorientOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_reorient_cargs(params, execution)
    const ret = volume_reorient_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_reorient(
    volume: InputPathType,
    orient_string: string,
    volume_out: string,
    runner: Runner | null = null,
): VolumeReorientOutputs {
    /**
     * Change voxel order of a volume file.
     * 
     * Changes the voxel order and the header spacing/origin information such that the value of any spatial point is unchanged.  Orientation strings look like 'LPI', which means first index is left to right, second is posterior to anterior, and third is inferior to superior.  The valid characters are:
     * 
     * L      left to right
     * R      right to left
     * P      posterior to anterior
     * A      anterior to posterior
     * I      inferior to superior
     * S      superior to inferior.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume the volume to reorient
     * @param orient_string the desired orientation
     * @param volume_out out - the reoriented volume
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeReorientOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_REORIENT_METADATA);
    const params = volume_reorient_params(volume, orient_string, volume_out)
    return volume_reorient_execute(params, execution);
}


export {
      VOLUME_REORIENT_METADATA,
      VolumeReorientOutputs,
      VolumeReorientParameters,
      volume_reorient,
      volume_reorient_params,
};
