// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_LABEL_MODIFY_KEYS_METADATA: Metadata = {
    id: "d5c948e79609bac6e3ad1be6e829d33b4b2d3d16.boutiques",
    name: "volume-label-modify-keys",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeLabelModifyKeysParameters {
    "__STYXTYPE__": "volume-label-modify-keys";
    "volume_in": InputPathType;
    "remap_file": string;
    "volume_out": string;
    "opt_subvolume_subvolume"?: string | null | undefined;
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
        "volume-label-modify-keys": volume_label_modify_keys_cargs,
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
        "volume-label-modify-keys": volume_label_modify_keys_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `volume_label_modify_keys(...)`.
 *
 * @interface
 */
interface VolumeLabelModifyKeysOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume label file
     */
    volume_out: OutputPathType;
}


function volume_label_modify_keys_params(
    volume_in: InputPathType,
    remap_file: string,
    volume_out: string,
    opt_subvolume_subvolume: string | null = null,
): VolumeLabelModifyKeysParameters {
    /**
     * Build parameters.
    
     * @param volume_in the input volume label file
     * @param remap_file text file with old and new key values
     * @param volume_out the output volume label file
     * @param opt_subvolume_subvolume select a single subvolume: the subvolume number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-label-modify-keys" as const,
        "volume_in": volume_in,
        "remap_file": remap_file,
        "volume_out": volume_out,
    };
    if (opt_subvolume_subvolume !== null) {
        params["opt_subvolume_subvolume"] = opt_subvolume_subvolume;
    }
    return params;
}


function volume_label_modify_keys_cargs(
    params: VolumeLabelModifyKeysParameters,
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
    cargs.push("-volume-label-modify-keys");
    cargs.push(execution.inputFile((params["volume_in"] ?? null)));
    cargs.push((params["remap_file"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["opt_subvolume_subvolume"] ?? null) !== null) {
        cargs.push(
            "-subvolume",
            (params["opt_subvolume_subvolume"] ?? null)
        );
    }
    return cargs;
}


function volume_label_modify_keys_outputs(
    params: VolumeLabelModifyKeysParameters,
    execution: Execution,
): VolumeLabelModifyKeysOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeLabelModifyKeysOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_label_modify_keys_execute(
    params: VolumeLabelModifyKeysParameters,
    execution: Execution,
): VolumeLabelModifyKeysOutputs {
    /**
     * Change key values in a volume label file.
     * 
     * <remap-file> should have lines of the form 'oldkey newkey', like so:
     * 
     * 3 5
     * 5 8
     * 8 2
     * 
     * This would change the current label with key '3' to use the key '5' instead, 5 would use 8, and 8 would use 2.  Any collision in key values results in the label that was not specified in the remap file getting remapped to an otherwise unused key.  Remapping more than one key to the same new key, or the same key to more than one new key, results in an error.  This will not change the appearance of the file when displayed, as it will change the key values in the data at the same time.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeLabelModifyKeysOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_label_modify_keys_cargs(params, execution)
    const ret = volume_label_modify_keys_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_label_modify_keys(
    volume_in: InputPathType,
    remap_file: string,
    volume_out: string,
    opt_subvolume_subvolume: string | null = null,
    runner: Runner | null = null,
): VolumeLabelModifyKeysOutputs {
    /**
     * Change key values in a volume label file.
     * 
     * <remap-file> should have lines of the form 'oldkey newkey', like so:
     * 
     * 3 5
     * 5 8
     * 8 2
     * 
     * This would change the current label with key '3' to use the key '5' instead, 5 would use 8, and 8 would use 2.  Any collision in key values results in the label that was not specified in the remap file getting remapped to an otherwise unused key.  Remapping more than one key to the same new key, or the same key to more than one new key, results in an error.  This will not change the appearance of the file when displayed, as it will change the key values in the data at the same time.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume_in the input volume label file
     * @param remap_file text file with old and new key values
     * @param volume_out the output volume label file
     * @param opt_subvolume_subvolume select a single subvolume: the subvolume number or name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeLabelModifyKeysOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_LABEL_MODIFY_KEYS_METADATA);
    const params = volume_label_modify_keys_params(volume_in, remap_file, volume_out, opt_subvolume_subvolume)
    return volume_label_modify_keys_execute(params, execution);
}


export {
      VOLUME_LABEL_MODIFY_KEYS_METADATA,
      VolumeLabelModifyKeysOutputs,
      VolumeLabelModifyKeysParameters,
      volume_label_modify_keys,
      volume_label_modify_keys_params,
};
