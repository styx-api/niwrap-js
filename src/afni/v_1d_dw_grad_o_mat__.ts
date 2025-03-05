// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1D_DW_GRAD_O_MAT___METADATA: Metadata = {
    id: "46eee009ed5251cf0654dc7e2305bcbaecf3782b.boutiques",
    name: "1dDW_Grad_o_Mat++",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dDwGradOMatParameters {
    "__STYXTYPE__": "1dDW_Grad_o_Mat++";
    "in_row_vec": InputPathType;
    "in_col_vec": InputPathType;
    "in_col_matA": InputPathType;
    "in_col_matT": InputPathType;
    "flip_x": boolean;
    "flip_y": boolean;
    "flip_z": boolean;
    "no_flip": boolean;
    "out_row_vec": string;
    "out_col_vec": string;
    "out_col_matA": string;
    "out_col_matT": string;
    "in_bvals"?: InputPathType | null | undefined;
    "out_col_bval": boolean;
    "out_row_bval_sep"?: string | null | undefined;
    "out_col_bval_sep"?: string | null | undefined;
    "unit_mag_out": boolean;
    "check_abs_min"?: number | null | undefined;
    "bref_mean_top": boolean;
    "put_zeros_top": boolean;
    "bmax_ref"?: number | null | undefined;
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
        "1dDW_Grad_o_Mat++": v_1d_dw_grad_o_mat___cargs,
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
        "1dDW_Grad_o_Mat++": v_1d_dw_grad_o_mat___outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1d_dw_grad_o_mat__(...)`.
 *
 * @interface
 */
interface V1dDwGradOMatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file of gradients or matrices
     */
    outfile: OutputPathType;
    /**
     * Output b-values file in a single row
     */
    out_row_bval_file: OutputPathType | null;
    /**
     * Output b-values file in a single column
     */
    out_col_bval_file: OutputPathType | null;
}


function v_1d_dw_grad_o_mat___params(
    in_row_vec: InputPathType,
    in_col_vec: InputPathType,
    in_col_mat_a: InputPathType,
    in_col_mat_t: InputPathType,
    out_row_vec: string,
    out_col_vec: string,
    out_col_mat_a: string,
    out_col_mat_t: string,
    flip_x: boolean = false,
    flip_y: boolean = false,
    flip_z: boolean = false,
    no_flip: boolean = false,
    in_bvals: InputPathType | null = null,
    out_col_bval: boolean = false,
    out_row_bval_sep: string | null = null,
    out_col_bval_sep: string | null = null,
    unit_mag_out: boolean = false,
    check_abs_min: number | null = null,
    bref_mean_top: boolean = false,
    put_zeros_top: boolean = false,
    bmax_ref: number | null = null,
): V1dDwGradOMatParameters {
    /**
     * Build parameters.
    
     * @param in_row_vec Input file of 3 rows of gradients (e.g., dcm2nii-format output)
     * @param in_col_vec Input file of 3 columns of gradients
     * @param in_col_mat_a Input file of 6 columns of b- or g-matrix in 'A(FNI)' diagonal first format
     * @param in_col_mat_t Input file of 6 columns of b- or g-matrix in 'T(ORTOISE)' row first format
     * @param out_row_vec Output file of 3 rows of gradients
     * @param out_col_vec Output file of 3 columns of gradients
     * @param out_col_mat_a Output file of 6 columns of b- or g-matrix in 'A(FNI)' diagonal first format
     * @param out_col_mat_t Output file of 6 columns of b- or g-matrix in 'T(ORTOISE)' row first format
     * @param flip_x Change sign of first column of gradients (or of the x-component parts of the matrix)
     * @param flip_y Change sign of second column of gradients (or of the y-component parts of the matrix)
     * @param flip_z Change sign of third column of gradients (or of the z-component parts of the matrix)
     * @param no_flip Don't change any gradient/matrix signs (default behavior)
     * @param in_bvals BVAL_FILE is a file of b-values either in a single row or a single column
     * @param out_col_bval Switch to put a column of the bvalues as the first column in the output data
     * @param out_row_bval_sep Output a file of bvalues in a single row
     * @param out_col_bval_sep Output a file of bvalues in a single column
     * @param unit_mag_out Switch to scale each vector/matrix from the INFILE to either unit or zero magnitude
     * @param check_abs_min Specify the threshold to replace small negative diagonal elements with zero in the input matrix
     * @param bref_mean_top When averaging the reference 'b0' values, represent the mean of X values in the top row
     * @param put_zeros_top Add a row at the top with all zeros in the output format
     * @param bmax_ref THRESH is a scalar number below which b-values are considered zero or reference
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dDW_Grad_o_Mat++" as const,
        "in_row_vec": in_row_vec,
        "in_col_vec": in_col_vec,
        "in_col_matA": in_col_mat_a,
        "in_col_matT": in_col_mat_t,
        "flip_x": flip_x,
        "flip_y": flip_y,
        "flip_z": flip_z,
        "no_flip": no_flip,
        "out_row_vec": out_row_vec,
        "out_col_vec": out_col_vec,
        "out_col_matA": out_col_mat_a,
        "out_col_matT": out_col_mat_t,
        "out_col_bval": out_col_bval,
        "unit_mag_out": unit_mag_out,
        "bref_mean_top": bref_mean_top,
        "put_zeros_top": put_zeros_top,
    };
    if (in_bvals !== null) {
        params["in_bvals"] = in_bvals;
    }
    if (out_row_bval_sep !== null) {
        params["out_row_bval_sep"] = out_row_bval_sep;
    }
    if (out_col_bval_sep !== null) {
        params["out_col_bval_sep"] = out_col_bval_sep;
    }
    if (check_abs_min !== null) {
        params["check_abs_min"] = check_abs_min;
    }
    if (bmax_ref !== null) {
        params["bmax_ref"] = bmax_ref;
    }
    return params;
}


function v_1d_dw_grad_o_mat___cargs(
    params: V1dDwGradOMatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dDW_Grad_o_Mat++");
    cargs.push(
        "-in_row_vec",
        execution.inputFile((params["in_row_vec"] ?? null))
    );
    cargs.push(
        "-in_col_vec",
        execution.inputFile((params["in_col_vec"] ?? null))
    );
    cargs.push(
        "-in_col_matA",
        execution.inputFile((params["in_col_matA"] ?? null))
    );
    cargs.push(
        "-in_col_matT",
        execution.inputFile((params["in_col_matT"] ?? null))
    );
    if ((params["flip_x"] ?? null)) {
        cargs.push("-flip_x");
    }
    if ((params["flip_y"] ?? null)) {
        cargs.push("-flip_y");
    }
    if ((params["flip_z"] ?? null)) {
        cargs.push("-flip_z");
    }
    if ((params["no_flip"] ?? null)) {
        cargs.push("-no_flip");
    }
    cargs.push(
        "-out_row_vec",
        (params["out_row_vec"] ?? null)
    );
    cargs.push(
        "-out_col_vec",
        (params["out_col_vec"] ?? null)
    );
    cargs.push(
        "-out_col_matA",
        (params["out_col_matA"] ?? null)
    );
    cargs.push(
        "-out_col_matT",
        (params["out_col_matT"] ?? null)
    );
    if ((params["in_bvals"] ?? null) !== null) {
        cargs.push(
            "-in_bvals",
            execution.inputFile((params["in_bvals"] ?? null))
        );
    }
    if ((params["out_col_bval"] ?? null)) {
        cargs.push("-out_col_bval");
    }
    if ((params["out_row_bval_sep"] ?? null) !== null) {
        cargs.push(
            "-out_row_bval_sep",
            (params["out_row_bval_sep"] ?? null)
        );
    }
    if ((params["out_col_bval_sep"] ?? null) !== null) {
        cargs.push(
            "-out_col_bval_sep",
            (params["out_col_bval_sep"] ?? null)
        );
    }
    if ((params["unit_mag_out"] ?? null)) {
        cargs.push("-unit_mag_out");
    }
    if ((params["check_abs_min"] ?? null) !== null) {
        cargs.push(
            "-check_abs_min",
            String((params["check_abs_min"] ?? null))
        );
    }
    if ((params["bref_mean_top"] ?? null)) {
        cargs.push("-bref_mean_top");
    }
    if ((params["put_zeros_top"] ?? null)) {
        cargs.push("-put_zeros_top");
    }
    if ((params["bmax_ref"] ?? null) !== null) {
        cargs.push(
            "-bmax_ref",
            String((params["bmax_ref"] ?? null))
        );
    }
    return cargs;
}


function v_1d_dw_grad_o_mat___outputs(
    params: V1dDwGradOMatParameters,
    execution: Execution,
): V1dDwGradOMatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dDwGradOMatOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["out_row_vec"] ?? null)].join('')),
        out_row_bval_file: ((params["out_row_bval_sep"] ?? null) !== null) ? execution.outputFile([(params["out_row_bval_sep"] ?? null)].join('')) : null,
        out_col_bval_file: ((params["out_row_bval_sep"] ?? null) !== null) ? execution.outputFile([(params["out_row_bval_sep"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_1d_dw_grad_o_mat___execute(
    params: V1dDwGradOMatParameters,
    execution: Execution,
): V1dDwGradOMatOutputs {
    /**
     * Manipulation of diffusion-weighted (DW) gradient vector files, b-value files, and b- or g-matrices with various input and output configurations.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dDwGradOMatOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1d_dw_grad_o_mat___cargs(params, execution)
    const ret = v_1d_dw_grad_o_mat___outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1d_dw_grad_o_mat__(
    in_row_vec: InputPathType,
    in_col_vec: InputPathType,
    in_col_mat_a: InputPathType,
    in_col_mat_t: InputPathType,
    out_row_vec: string,
    out_col_vec: string,
    out_col_mat_a: string,
    out_col_mat_t: string,
    flip_x: boolean = false,
    flip_y: boolean = false,
    flip_z: boolean = false,
    no_flip: boolean = false,
    in_bvals: InputPathType | null = null,
    out_col_bval: boolean = false,
    out_row_bval_sep: string | null = null,
    out_col_bval_sep: string | null = null,
    unit_mag_out: boolean = false,
    check_abs_min: number | null = null,
    bref_mean_top: boolean = false,
    put_zeros_top: boolean = false,
    bmax_ref: number | null = null,
    runner: Runner | null = null,
): V1dDwGradOMatOutputs {
    /**
     * Manipulation of diffusion-weighted (DW) gradient vector files, b-value files, and b- or g-matrices with various input and output configurations.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_row_vec Input file of 3 rows of gradients (e.g., dcm2nii-format output)
     * @param in_col_vec Input file of 3 columns of gradients
     * @param in_col_mat_a Input file of 6 columns of b- or g-matrix in 'A(FNI)' diagonal first format
     * @param in_col_mat_t Input file of 6 columns of b- or g-matrix in 'T(ORTOISE)' row first format
     * @param out_row_vec Output file of 3 rows of gradients
     * @param out_col_vec Output file of 3 columns of gradients
     * @param out_col_mat_a Output file of 6 columns of b- or g-matrix in 'A(FNI)' diagonal first format
     * @param out_col_mat_t Output file of 6 columns of b- or g-matrix in 'T(ORTOISE)' row first format
     * @param flip_x Change sign of first column of gradients (or of the x-component parts of the matrix)
     * @param flip_y Change sign of second column of gradients (or of the y-component parts of the matrix)
     * @param flip_z Change sign of third column of gradients (or of the z-component parts of the matrix)
     * @param no_flip Don't change any gradient/matrix signs (default behavior)
     * @param in_bvals BVAL_FILE is a file of b-values either in a single row or a single column
     * @param out_col_bval Switch to put a column of the bvalues as the first column in the output data
     * @param out_row_bval_sep Output a file of bvalues in a single row
     * @param out_col_bval_sep Output a file of bvalues in a single column
     * @param unit_mag_out Switch to scale each vector/matrix from the INFILE to either unit or zero magnitude
     * @param check_abs_min Specify the threshold to replace small negative diagonal elements with zero in the input matrix
     * @param bref_mean_top When averaging the reference 'b0' values, represent the mean of X values in the top row
     * @param put_zeros_top Add a row at the top with all zeros in the output format
     * @param bmax_ref THRESH is a scalar number below which b-values are considered zero or reference
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dDwGradOMatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1D_DW_GRAD_O_MAT___METADATA);
    const params = v_1d_dw_grad_o_mat___params(in_row_vec, in_col_vec, in_col_mat_a, in_col_mat_t, out_row_vec, out_col_vec, out_col_mat_a, out_col_mat_t, flip_x, flip_y, flip_z, no_flip, in_bvals, out_col_bval, out_row_bval_sep, out_col_bval_sep, unit_mag_out, check_abs_min, bref_mean_top, put_zeros_top, bmax_ref)
    return v_1d_dw_grad_o_mat___execute(params, execution);
}


export {
      V1dDwGradOMatOutputs,
      V1dDwGradOMatParameters,
      V_1D_DW_GRAD_O_MAT___METADATA,
      v_1d_dw_grad_o_mat__,
      v_1d_dw_grad_o_mat___params,
};
