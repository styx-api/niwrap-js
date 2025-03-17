// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DICOM_RENAME_METADATA: Metadata = {
    id: "967c36e6f1722cec2c2a414d9307145c8c3ca445.boutiques",
    name: "dicom-rename",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface DicomRenameParameters {
    "__STYXTYPE__": "dicom-rename";
    "input_files": Array<InputPathType>;
    "output_base": string;
    "version": boolean;
    "help": boolean;
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
        "dicom-rename": dicom_rename_cargs,
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
        "dicom-rename": dicom_rename_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `dicom_rename(...)`.
 *
 * @interface
 */
interface DicomRenameOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Renamed output DICOM file with series and image numbers.
     */
    renamed_dicom: OutputPathType;
}


function dicom_rename_params(
    input_files: Array<InputPathType>,
    output_base: string,
    version: boolean = false,
    help: boolean = false,
): DicomRenameParameters {
    /**
     * Build parameters.
    
     * @param input_files Input DICOM files to be renamed.
     * @param output_base Base name for output files that includes series and image numbers.
     * @param version Print version and exit.
     * @param help Print help and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dicom-rename" as const,
        "input_files": input_files,
        "output_base": output_base,
        "version": version,
        "help": help,
    };
    return params;
}


function dicom_rename_cargs(
    params: DicomRenameParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dicom-rename");
    cargs.push(
        "-rename",
        ...(params["input_files"] ?? null).map(f => execution.inputFile(f))
    );
    cargs.push(
        "--o",
        (params["output_base"] ?? null)
    );
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function dicom_rename_outputs(
    params: DicomRenameParameters,
    execution: Execution,
): DicomRenameOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DicomRenameOutputs = {
        root: execution.outputFile("."),
        renamed_dicom: execution.outputFile([(params["output_base"] ?? null), "-SSS-IIIII.dcm"].join('')),
    };
    return ret;
}


function dicom_rename_execute(
    params: DicomRenameParameters,
    execution: Execution,
): DicomRenameOutputs {
    /**
     * Copies dicom file(s) to new path with more meaningful names.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DicomRenameOutputs`).
     */
    params = execution.params(params)
    const cargs = dicom_rename_cargs(params, execution)
    const ret = dicom_rename_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dicom_rename(
    input_files: Array<InputPathType>,
    output_base: string,
    version: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): DicomRenameOutputs {
    /**
     * Copies dicom file(s) to new path with more meaningful names.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_files Input DICOM files to be renamed.
     * @param output_base Base name for output files that includes series and image numbers.
     * @param version Print version and exit.
     * @param help Print help and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DicomRenameOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DICOM_RENAME_METADATA);
    const params = dicom_rename_params(input_files, output_base, version, help)
    return dicom_rename_execute(params, execution);
}


export {
      DICOM_RENAME_METADATA,
      DicomRenameOutputs,
      DicomRenameParameters,
      dicom_rename,
      dicom_rename_params,
};
