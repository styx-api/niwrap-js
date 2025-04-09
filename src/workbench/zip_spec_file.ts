// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ZIP_SPEC_FILE_METADATA: Metadata = {
    id: "e38a56e73a56a48cda645c57df326064def2b183.boutiques",
    name: "zip-spec-file",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface ZipSpecFileParameters {
    "__STYXTYPE__": "zip-spec-file";
    "spec_file": string;
    "extract_folder": string;
    "zip_file": string;
    "opt_base_dir_directory"?: string | null | undefined;
    "opt_skip_missing": boolean;
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
        "zip-spec-file": zip_spec_file_cargs,
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
 * Output object returned when calling `zip_spec_file(...)`.
 *
 * @interface
 */
interface ZipSpecFileOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function zip_spec_file_params(
    spec_file: string,
    extract_folder: string,
    zip_file: string,
    opt_base_dir_directory: string | null = null,
    opt_skip_missing: boolean = false,
): ZipSpecFileParameters {
    /**
     * Build parameters.
    
     * @param spec_file the specification file to add to zip file
     * @param extract_folder the name of the folder created when the zip file is unzipped
     * @param zip_file out - the zip file that will be created
     * @param opt_base_dir_directory specify a directory that all data files are somewhere within, this will become the root of the zipfile's directory structure: the directory
     * @param opt_skip_missing any missing files will generate only warnings, and the zip file will be created anyway
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "zip-spec-file" as const,
        "spec_file": spec_file,
        "extract_folder": extract_folder,
        "zip_file": zip_file,
        "opt_skip_missing": opt_skip_missing,
    };
    if (opt_base_dir_directory !== null) {
        params["opt_base_dir_directory"] = opt_base_dir_directory;
    }
    return params;
}


function zip_spec_file_cargs(
    params: ZipSpecFileParameters,
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
    cargs.push("-zip-spec-file");
    cargs.push((params["spec_file"] ?? null));
    cargs.push((params["extract_folder"] ?? null));
    cargs.push((params["zip_file"] ?? null));
    if ((params["opt_base_dir_directory"] ?? null) !== null) {
        cargs.push(
            "-base-dir",
            (params["opt_base_dir_directory"] ?? null)
        );
    }
    if ((params["opt_skip_missing"] ?? null)) {
        cargs.push("-skip-missing");
    }
    return cargs;
}


function zip_spec_file_outputs(
    params: ZipSpecFileParameters,
    execution: Execution,
): ZipSpecFileOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ZipSpecFileOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function zip_spec_file_execute(
    params: ZipSpecFileParameters,
    execution: Execution,
): ZipSpecFileOutputs {
    /**
     * Zip a spec file and its data files.
     * 
     * If zip-file already exists, it will be overwritten.  If -base-dir is not specified, the directory containing the spec file is used for the base directory.  The spec file must contain only relative paths, and no data files may be outside the base directory.  Scene files inside spec files are not checked for what files they reference, ensure that all data files referenced by the scene files are also referenced by the spec file.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ZipSpecFileOutputs`).
     */
    params = execution.params(params)
    const cargs = zip_spec_file_cargs(params, execution)
    const ret = zip_spec_file_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function zip_spec_file(
    spec_file: string,
    extract_folder: string,
    zip_file: string,
    opt_base_dir_directory: string | null = null,
    opt_skip_missing: boolean = false,
    runner: Runner | null = null,
): ZipSpecFileOutputs {
    /**
     * Zip a spec file and its data files.
     * 
     * If zip-file already exists, it will be overwritten.  If -base-dir is not specified, the directory containing the spec file is used for the base directory.  The spec file must contain only relative paths, and no data files may be outside the base directory.  Scene files inside spec files are not checked for what files they reference, ensure that all data files referenced by the scene files are also referenced by the spec file.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param spec_file the specification file to add to zip file
     * @param extract_folder the name of the folder created when the zip file is unzipped
     * @param zip_file out - the zip file that will be created
     * @param opt_base_dir_directory specify a directory that all data files are somewhere within, this will become the root of the zipfile's directory structure: the directory
     * @param opt_skip_missing any missing files will generate only warnings, and the zip file will be created anyway
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ZipSpecFileOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ZIP_SPEC_FILE_METADATA);
    const params = zip_spec_file_params(spec_file, extract_folder, zip_file, opt_base_dir_directory, opt_skip_missing)
    return zip_spec_file_execute(params, execution);
}


export {
      ZIP_SPEC_FILE_METADATA,
      ZipSpecFileOutputs,
      ZipSpecFileParameters,
      zip_spec_file,
      zip_spec_file_params,
};
