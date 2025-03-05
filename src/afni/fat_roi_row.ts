// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FAT_ROI_ROW_METADATA: Metadata = {
    id: "027b80948cf0bd1ac046353e98ebb2ca04186002.boutiques",
    name: "fat_roi_row",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FatRoiRowParameters {
    "__STYXTYPE__": "fat_roi_row";
    "roi": string;
    "matrix_files"?: string | null | undefined;
    "list_file"?: InputPathType | null | undefined;
    "extern_labs_no": boolean;
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
        "fat_roi_row": fat_roi_row_cargs,
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
        "fat_roi_row": fat_roi_row_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fat_roi_row(...)`.
 *
 * @interface
 */
interface FatRoiRowOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Selected ROI row output file in .row format.
     */
    output_file: OutputPathType;
}


function fat_roi_row_params(
    roi: string,
    matrix_files: string | null = null,
    list_file: InputPathType | null = null,
    extern_labs_no: boolean = false,
): FatRoiRowParameters {
    /**
     * Build parameters.
    
     * @param roi Specify which ROI's row of connectivity you want to select out. If labeltables were used, you may select the ROI by either the string label or the ROI mask number.
     * @param matrix_files Provide the set of matrix (*.grid or *.netcc) files by searchable path. This can be a globbable entry in quotes containing wildcard characters.
     * @param list_file Provide the set of matrix (*.grid or *.netcc) files by explicit path in a text file. The LIST text file must contain at least one column with the path to subject matrix file.
     * @param extern_labs_no Switch to turn off the writing/usage of user-defined labels in the *.grid/*.netcc files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fat_roi_row" as const,
        "roi": roi,
        "extern_labs_no": extern_labs_no,
    };
    if (matrix_files !== null) {
        params["matrix_files"] = matrix_files;
    }
    if (list_file !== null) {
        params["list_file"] = list_file;
    }
    return params;
}


function fat_roi_row_cargs(
    params: FatRoiRowParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fat_roi_row.py");
    cargs.push(
        "-r",
        (params["roi"] ?? null)
    );
    cargs.push("{");
    if ((params["matrix_files"] ?? null) !== null) {
        cargs.push(
            "-m",
            (params["matrix_files"] ?? null)
        );
    }
    cargs.push("|");
    if ((params["list_file"] ?? null) !== null) {
        cargs.push(
            "-l",
            execution.inputFile((params["list_file"] ?? null))
        );
    }
    cargs.push("}");
    if ((params["extern_labs_no"] ?? null)) {
        cargs.push("-E");
    }
    return cargs;
}


function fat_roi_row_outputs(
    params: FatRoiRowParameters,
    execution: Execution,
): FatRoiRowOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FatRoiRowOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["roi"] ?? null), "_selected.row"].join('')),
    };
    return ret;
}


function fat_roi_row_execute(
    params: FatRoiRowParameters,
    execution: Execution,
): FatRoiRowOutputs {
    /**
     * Select a single ROI's row out of a connectivity matrix file (*.grid or *.netcc) for viewing and/or further analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FatRoiRowOutputs`).
     */
    params = execution.params(params)
    const cargs = fat_roi_row_cargs(params, execution)
    const ret = fat_roi_row_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fat_roi_row(
    roi: string,
    matrix_files: string | null = null,
    list_file: InputPathType | null = null,
    extern_labs_no: boolean = false,
    runner: Runner | null = null,
): FatRoiRowOutputs {
    /**
     * Select a single ROI's row out of a connectivity matrix file (*.grid or *.netcc) for viewing and/or further analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param roi Specify which ROI's row of connectivity you want to select out. If labeltables were used, you may select the ROI by either the string label or the ROI mask number.
     * @param matrix_files Provide the set of matrix (*.grid or *.netcc) files by searchable path. This can be a globbable entry in quotes containing wildcard characters.
     * @param list_file Provide the set of matrix (*.grid or *.netcc) files by explicit path in a text file. The LIST text file must contain at least one column with the path to subject matrix file.
     * @param extern_labs_no Switch to turn off the writing/usage of user-defined labels in the *.grid/*.netcc files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FatRoiRowOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FAT_ROI_ROW_METADATA);
    const params = fat_roi_row_params(roi, matrix_files, list_file, extern_labs_no)
    return fat_roi_row_execute(params, execution);
}


export {
      FAT_ROI_ROW_METADATA,
      FatRoiRowOutputs,
      FatRoiRowParameters,
      fat_roi_row,
      fat_roi_row_params,
};
