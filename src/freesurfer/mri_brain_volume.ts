// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_BRAIN_VOLUME_METADATA: Metadata = {
    id: "0d3c77e17bea54575e22e56b3796c1c1d7d5219d.boutiques",
    name: "mri_brain_volume",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriBrainVolumeParameters {
    "__STYXTYPE__": "mri_brain_volume";
    "input_file": InputPathType;
    "output_file"?: string | null | undefined;
    "force_param"?: number | null | undefined;
    "version": boolean;
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
        "mri_brain_volume": mri_brain_volume_cargs,
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
        "mri_brain_volume": mri_brain_volume_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_brain_volume(...)`.
 *
 * @interface
 */
interface MriBrainVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing brain volume information
     */
    output_volume_file: OutputPathType | null;
}


function mri_brain_volume_params(
    input_file: InputPathType,
    output_file: string | null = null,
    force_param: number | null = null,
    version: boolean = false,
): MriBrainVolumeParameters {
    /**
     * Build parameters.
    
     * @param input_file Input MRI file
     * @param output_file Output file for brain volume
     * @param force_param Change pushout force (default 1.0)
     * @param version Show the current version
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_brain_volume" as const,
        "input_file": input_file,
        "version": version,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (force_param !== null) {
        params["force_param"] = force_param;
    }
    return params;
}


function mri_brain_volume_cargs(
    params: MriBrainVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_brain_volume");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["output_file"] ?? null) !== null) {
        cargs.push((params["output_file"] ?? null));
    }
    if ((params["force_param"] ?? null) !== null) {
        cargs.push(
            "-forceParam",
            String((params["force_param"] ?? null))
        );
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mri_brain_volume_outputs(
    params: MriBrainVolumeParameters,
    execution: Execution,
): MriBrainVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriBrainVolumeOutputs = {
        root: execution.outputFile("."),
        output_volume_file: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_brain_volume_execute(
    params: MriBrainVolumeParameters,
    execution: Execution,
): MriBrainVolumeOutputs {
    /**
     * Tool to calculate brain volume from MRI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriBrainVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_brain_volume_cargs(params, execution)
    const ret = mri_brain_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_brain_volume(
    input_file: InputPathType,
    output_file: string | null = null,
    force_param: number | null = null,
    version: boolean = false,
    runner: Runner | null = null,
): MriBrainVolumeOutputs {
    /**
     * Tool to calculate brain volume from MRI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input MRI file
     * @param output_file Output file for brain volume
     * @param force_param Change pushout force (default 1.0)
     * @param version Show the current version
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriBrainVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_BRAIN_VOLUME_METADATA);
    const params = mri_brain_volume_params(input_file, output_file, force_param, version)
    return mri_brain_volume_execute(params, execution);
}


export {
      MRI_BRAIN_VOLUME_METADATA,
      MriBrainVolumeOutputs,
      MriBrainVolumeParameters,
      mri_brain_volume,
      mri_brain_volume_params,
};
