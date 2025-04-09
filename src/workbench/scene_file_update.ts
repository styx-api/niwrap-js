// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SCENE_FILE_UPDATE_METADATA: Metadata = {
    id: "f9b22dcadcb7db5be68079d8abd1b5b77a8b1255.boutiques",
    name: "scene-file-update",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SceneFileUpdateCopyMapOnePaletteParameters {
    "__STYXTYPE__": "copy_map_one_palette";
    "data_file_name_suffix": string;
}


interface SceneFileUpdateDataFileAddParameters {
    "__STYXTYPE__": "data_file_add";
    "name_of_data_file": string;
}


interface SceneFileUpdateDataFileRemoveParameters {
    "__STYXTYPE__": "data_file_remove";
    "name_of_data_file": string;
}


interface SceneFileUpdateParameters {
    "__STYXTYPE__": "scene-file-update";
    "input_scene_file": string;
    "output_scene_file": string;
    "scene_name_or_number": string;
    "opt_fix_map_palette_settings": boolean;
    "opt_remove_missing_files": boolean;
    "opt_error": boolean;
    "opt_verbose": boolean;
    "copy_map_one_palette"?: Array<SceneFileUpdateCopyMapOnePaletteParameters> | null | undefined;
    "data_file_add"?: Array<SceneFileUpdateDataFileAddParameters> | null | undefined;
    "data_file_remove"?: Array<SceneFileUpdateDataFileRemoveParameters> | null | undefined;
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
        "scene-file-update": scene_file_update_cargs,
        "copy_map_one_palette": scene_file_update_copy_map_one_palette_cargs,
        "data_file_add": scene_file_update_data_file_add_cargs,
        "data_file_remove": scene_file_update_data_file_remove_cargs,
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


function scene_file_update_copy_map_one_palette_params(
    data_file_name_suffix: string,
): SceneFileUpdateCopyMapOnePaletteParameters {
    /**
     * Build parameters.
    
     * @param data_file_name_suffix Name of palette mapped data file (cifti, metric, volume)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "copy_map_one_palette" as const,
        "data_file_name_suffix": data_file_name_suffix,
    };
    return params;
}


function scene_file_update_copy_map_one_palette_cargs(
    params: SceneFileUpdateCopyMapOnePaletteParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-copy-map-one-palette");
    cargs.push((params["data_file_name_suffix"] ?? null));
    return cargs;
}


function scene_file_update_data_file_add_params(
    name_of_data_file: string,
): SceneFileUpdateDataFileAddParameters {
    /**
     * Build parameters.
    
     * @param name_of_data_file Name of data file.  If a data file not in the current directory, it is best to use an absolute path (a relative path may work).  Instead of a data file, this value may be the name of a text file (must end in ".txt") that contains the names of one or more data files, one per line.
Example on UNIX to create a text file containing all CIFTI scalar files in the current directory with absolute paths:
   ls -d $PWD/*dscalar.nii  > file.txt
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "data_file_add" as const,
        "name_of_data_file": name_of_data_file,
    };
    return params;
}


function scene_file_update_data_file_add_cargs(
    params: SceneFileUpdateDataFileAddParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-data-file-add");
    cargs.push((params["name_of_data_file"] ?? null));
    return cargs;
}


function scene_file_update_data_file_remove_params(
    name_of_data_file: string,
): SceneFileUpdateDataFileRemoveParameters {
    /**
     * Build parameters.
    
     * @param name_of_data_file Name of data file.  If a data file not in the current directory, it is best to use an absolute path (a relative path may work).  Instead of a data file, this value may be the name of a text file (must end in ".txt") that contains the names of one or more data files, one per line.
Example on UNIX to create a text file containing all CIFTI scalar files in the current directory with absolute paths:
   ls -d $PWD/*dscalar.nii  > file.txt
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "data_file_remove" as const,
        "name_of_data_file": name_of_data_file,
    };
    return params;
}


function scene_file_update_data_file_remove_cargs(
    params: SceneFileUpdateDataFileRemoveParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-data-file-remove");
    cargs.push((params["name_of_data_file"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `scene_file_update(...)`.
 *
 * @interface
 */
interface SceneFileUpdateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function scene_file_update_params(
    input_scene_file: string,
    output_scene_file: string,
    scene_name_or_number: string,
    opt_fix_map_palette_settings: boolean = false,
    opt_remove_missing_files: boolean = false,
    opt_error: boolean = false,
    opt_verbose: boolean = false,
    copy_map_one_palette: Array<SceneFileUpdateCopyMapOnePaletteParameters> | null = null,
    data_file_add: Array<SceneFileUpdateDataFileAddParameters> | null = null,
    data_file_remove: Array<SceneFileUpdateDataFileRemoveParameters> | null = null,
): SceneFileUpdateParameters {
    /**
     * Build parameters.
    
     * @param input_scene_file the input scene file
     * @param output_scene_file the new scene file to create
     * @param scene_name_or_number name or number (starting at one) of the scene in the scene file
     * @param opt_fix_map_palette_settings Fix palette settings for files with change in number of maps
     * @param opt_remove_missing_files Remove missing files from SpecFile
     * @param opt_error Abort command if there is an error performing any of the operations on the scene file
     * @param opt_verbose Print names of files that have palettes updated
     * @param copy_map_one_palette Copy palettes settings from first map to all maps in a data file
     * @param data_file_add Add a data file to scene's loaded files
     * @param data_file_remove Remove a data file from scene's loaded files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "scene-file-update" as const,
        "input_scene_file": input_scene_file,
        "output_scene_file": output_scene_file,
        "scene_name_or_number": scene_name_or_number,
        "opt_fix_map_palette_settings": opt_fix_map_palette_settings,
        "opt_remove_missing_files": opt_remove_missing_files,
        "opt_error": opt_error,
        "opt_verbose": opt_verbose,
    };
    if (copy_map_one_palette !== null) {
        params["copy_map_one_palette"] = copy_map_one_palette;
    }
    if (data_file_add !== null) {
        params["data_file_add"] = data_file_add;
    }
    if (data_file_remove !== null) {
        params["data_file_remove"] = data_file_remove;
    }
    return params;
}


function scene_file_update_cargs(
    params: SceneFileUpdateParameters,
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
    cargs.push("-scene-file-update");
    cargs.push((params["input_scene_file"] ?? null));
    cargs.push((params["output_scene_file"] ?? null));
    cargs.push((params["scene_name_or_number"] ?? null));
    if ((params["opt_fix_map_palette_settings"] ?? null)) {
        cargs.push("-fix-map-palette-settings");
    }
    if ((params["opt_remove_missing_files"] ?? null)) {
        cargs.push("-remove-missing-files");
    }
    if ((params["opt_error"] ?? null)) {
        cargs.push("-error");
    }
    if ((params["opt_verbose"] ?? null)) {
        cargs.push("-verbose");
    }
    if ((params["copy_map_one_palette"] ?? null) !== null) {
        cargs.push(...(params["copy_map_one_palette"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["data_file_add"] ?? null) !== null) {
        cargs.push(...(params["data_file_add"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["data_file_remove"] ?? null) !== null) {
        cargs.push(...(params["data_file_remove"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function scene_file_update_outputs(
    params: SceneFileUpdateParameters,
    execution: Execution,
): SceneFileUpdateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SceneFileUpdateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function scene_file_update_execute(
    params: SceneFileUpdateParameters,
    execution: Execution,
): SceneFileUpdateOutputs {
    /**
     * Update scene file.
     * 
     * This command will update a scene for specific changes in data files.
     * 
     * "-fix-map-palette-settings" will find all data files that have had a change in the number of maps since the scene scene was created.  If the file has its "Apply to All Maps" property enabled, the palette setting in the first map is copied to all maps in the file.  Note: This modifies the palette settings for the file in the scene (data file is NOT modified).
     * 
     * "-copy-map-one-palette" will copy the palette settings from the first map to all other maps in a data file.  This option is typically used when the number of maps in a data file changes.  It changes the palette settings in the scene that are applied to the data file when the scene is loaded (the data file is not modified).  The name of the data file specified on the command line is matched to the end of file names in the scene.  This allows matching multiple files if their names end with the same characters.  It also allows including a relative path when there is more than one file with the same name but in different paths and only one of the files to be updated.
     * 
     * "-remove-missing-files" Any files that fail to load when the scene is read will be removed from the scene.  Thus, if one deletes files prior to running with this option, the deleted files are removed from the scene.  
     * 
     * "-error" If this option is provided and there is an error while performing any of the scene operations, the command will immediately cease processing and the output scene file will not be created.   Otherwise any errors will be listed after the command finishes.
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SceneFileUpdateOutputs`).
     */
    params = execution.params(params)
    const cargs = scene_file_update_cargs(params, execution)
    const ret = scene_file_update_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function scene_file_update(
    input_scene_file: string,
    output_scene_file: string,
    scene_name_or_number: string,
    opt_fix_map_palette_settings: boolean = false,
    opt_remove_missing_files: boolean = false,
    opt_error: boolean = false,
    opt_verbose: boolean = false,
    copy_map_one_palette: Array<SceneFileUpdateCopyMapOnePaletteParameters> | null = null,
    data_file_add: Array<SceneFileUpdateDataFileAddParameters> | null = null,
    data_file_remove: Array<SceneFileUpdateDataFileRemoveParameters> | null = null,
    runner: Runner | null = null,
): SceneFileUpdateOutputs {
    /**
     * Update scene file.
     * 
     * This command will update a scene for specific changes in data files.
     * 
     * "-fix-map-palette-settings" will find all data files that have had a change in the number of maps since the scene scene was created.  If the file has its "Apply to All Maps" property enabled, the palette setting in the first map is copied to all maps in the file.  Note: This modifies the palette settings for the file in the scene (data file is NOT modified).
     * 
     * "-copy-map-one-palette" will copy the palette settings from the first map to all other maps in a data file.  This option is typically used when the number of maps in a data file changes.  It changes the palette settings in the scene that are applied to the data file when the scene is loaded (the data file is not modified).  The name of the data file specified on the command line is matched to the end of file names in the scene.  This allows matching multiple files if their names end with the same characters.  It also allows including a relative path when there is more than one file with the same name but in different paths and only one of the files to be updated.
     * 
     * "-remove-missing-files" Any files that fail to load when the scene is read will be removed from the scene.  Thus, if one deletes files prior to running with this option, the deleted files are removed from the scene.  
     * 
     * "-error" If this option is provided and there is an error while performing any of the scene operations, the command will immediately cease processing and the output scene file will not be created.   Otherwise any errors will be listed after the command finishes.
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param input_scene_file the input scene file
     * @param output_scene_file the new scene file to create
     * @param scene_name_or_number name or number (starting at one) of the scene in the scene file
     * @param opt_fix_map_palette_settings Fix palette settings for files with change in number of maps
     * @param opt_remove_missing_files Remove missing files from SpecFile
     * @param opt_error Abort command if there is an error performing any of the operations on the scene file
     * @param opt_verbose Print names of files that have palettes updated
     * @param copy_map_one_palette Copy palettes settings from first map to all maps in a data file
     * @param data_file_add Add a data file to scene's loaded files
     * @param data_file_remove Remove a data file from scene's loaded files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SceneFileUpdateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SCENE_FILE_UPDATE_METADATA);
    const params = scene_file_update_params(input_scene_file, output_scene_file, scene_name_or_number, opt_fix_map_palette_settings, opt_remove_missing_files, opt_error, opt_verbose, copy_map_one_palette, data_file_add, data_file_remove)
    return scene_file_update_execute(params, execution);
}


export {
      SCENE_FILE_UPDATE_METADATA,
      SceneFileUpdateCopyMapOnePaletteParameters,
      SceneFileUpdateDataFileAddParameters,
      SceneFileUpdateDataFileRemoveParameters,
      SceneFileUpdateOutputs,
      SceneFileUpdateParameters,
      scene_file_update,
      scene_file_update_copy_map_one_palette_params,
      scene_file_update_data_file_add_params,
      scene_file_update_data_file_remove_params,
      scene_file_update_params,
};
